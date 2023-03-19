import JobCard from "../components/JobCard";

import { Container } from "@mantine/core";

function AllJobs() {
  const Jobs = [
    {
      id: 1,
      title: "React Dev",
      description: "React Dev Description",
      skills: "html, css, javascript",
      budget: "$1000",
    },
    {
      id: 2,
      title: "Wordpress Dev",
      description: "Wordpress Dev Description",
      skills: "html, css, wp, php",
      budget: "$800",
    },
    {
      id: 3,
      title: "Dev Ops",
      description: "Dev Ops Dev Description",
      skills: "html, css, javascript, AWS",
      budget: "$1500",
    },
  ];

  return (
    <>
      <Container sx={{ margin: "0 auto 100px", maxWidth: "500px" }}>
        List Jobs
        {Jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            skills={job.skills}
            description={job.description}
            budget={job.budget}
          />
        ))}
      </Container>
    </>
  );
}

export default AllJobs;
