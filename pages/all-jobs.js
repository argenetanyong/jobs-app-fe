import { useQuery } from "react-query";
import { Container, Skeleton, Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

import JobCard from "../components/JobCard";

import jobsApi from "../api/jobs";

/* const Jobs = [
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
]; */

const fetchJobs = async () => {
  const res = await jobsApi.list();
  return res;
};

function AllJobs() {
  const { data, status } = useQuery("jobs", fetchJobs);

  return (
    <>
      <Container sx={{ margin: "0 auto 100px", maxWidth: "500px" }}>
        {status == "error" && (
          <>
            <Alert
              icon={<IconAlertCircle size="1rem" />}
              title="ERROR!"
              color="red"
            >
              Can not fetch data from server!
            </Alert>
          </>
        )}
        {status == "loading" && (
          <>
            <Skeleton height={50} circle mb="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} mt={6} radius="xl" />
            <Skeleton height={8} mt={6} width="70%" radius="xl" />
          </>
        )}
        {status == "success" &&
          data.map((job) => (
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
