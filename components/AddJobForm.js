import {
  createStyles,
  rem,
  Container,
  TextInput,
  TextArea,
  Button,
} from "@mantine/core";

function AddJobForm() {
  return (
    <div>
      <Container sx={{ maxWidth: "500px" }}>
        <TextInput label="Title" placeholder="Title" />

        <TextInput
          sx={{ marginTop: "10px" }}
          label="Skills"
          placeholder="IT, People Handling, Graphic Design... "
        />

        <TextInput
          sx={{ marginTop: "10px" }}
          label="Description"
          placeholder="Job description, qualification goes here... "
        />

        <TextInput
          sx={{ marginTop: "10px" }}
          label="Set your budget"
          placeholder="$10"
        />

        <TextInput
          sx={{ marginTop: "10px" }}
          label="Contact email"
          placeholder="Your email here... "
        />
        <Container
          sx={{
            display: "flex",
            justifyContent: "right",
            marginTop: "10px",
            padding: "0",
          }}
        >
          <Button>Submit</Button>
        </Container>
        {/* <Select
        mt="md"
        withinPortal
        data={["React", "Angular", "Svelte", "Vue"]}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      /> */}
      </Container>
    </div>
  );
}

export default AddJobForm;
