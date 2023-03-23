import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";

import {
  TextInput,
  NumberInput,
  TextArea,
  Button,
  Box,
  Group,
} from "@mantine/core";

import jobsApi from "../api/jobs";

const schema = z.object({
  title: z.string().min(2, { message: "Name should have at least 2 letters" }),
  skills: z.string().min(2, { message: "Name should have at least 2 letters" }),
  description: z
    .string()
    .min(2, { message: "Name should have at least 2 letters" }),
  budget: z.number(),
  contact_email: z.string().email({ message: "Invalid email" }),
});

function AddJobForm() {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      title: "",
      skills: "",
      description: "",
      age: 18,
      contact_email: "",
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((data) => jobsApi.create(data))}>
        <TextInput
          label="Title"
          placeholder="Title"
          {...form.getInputProps("title")}
        />

        <TextInput
          sx={{ marginTop: "10px" }}
          label="Skills"
          placeholder="IT, People Handling, Graphic Design... "
          {...form.getInputProps("skills")}
        />

        <TextInput
          sx={{ marginTop: "10px" }}
          label="Description"
          placeholder="Job description, qualification goes here... "
          {...form.getInputProps("description")}
        />

        <NumberInput
          sx={{ marginTop: "10px" }}
          label="Set your budget"
          hideControls
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value))
              ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
              : "$ "
          }
          {...form.getInputProps("budget")}
        />

        <TextInput
          sx={{ marginTop: "10px" }}
          label="Contact email"
          placeholder="Your email here... "
          {...form.getInputProps("contact_email")}
        />

        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default AddJobForm;
