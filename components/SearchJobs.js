import { useState } from "react";

import Router from "next/router";
import { Card, Container, Group, Button, Text, TextInput } from "@mantine/core";

function SearchJobs() {
  const [seachText, setSearchText] = useState("");

  return (
    <>
      <Container sx={{ maxWidth: "700px" }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          {/* <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Norway Fjord Adventures</Text>
          </Group> */}

          <TextInput
            placeholder="Type job title, skills here... "
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />

          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            onClick={() => {
              Router.push({
                pathname: "/all-jobs",
                query: { search: seachText },
              });
            }}
          >
            Search jobs
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default SearchJobs;
