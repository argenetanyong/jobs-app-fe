import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function JobCard({ title, skills, description, budget }) {
  return (
    <>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        sx={{ marginTop: "10px" }}
      >
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
        </Group>

        <Text size="sm" color="dimmed">
          {skills}
        </Text>

        <Text size="sm" color="dimmed">
          {description}
        </Text>

        <Badge color="green" variant="light" size="xl">
          {budget}
        </Badge>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Apply
        </Button>
      </Card>
    </>
  );
}

export default JobCard;
