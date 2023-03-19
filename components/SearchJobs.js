import { Card, Container, Group, Button, Text, TextInput } from "@mantine/core";

function SearchJobs() {
  return (
    <>
      <Container sx={{ maxWidth: "700px" }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          {/* <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
          </Group> */}

          <TextInput
            placeholder="Type job title, skills here... "
            withAsterisk
          />

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Search jobs
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default SearchJobs;
