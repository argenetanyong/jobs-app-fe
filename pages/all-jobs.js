import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { Container, Skeleton, Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

import JobCard from "../components/JobCard";

import jobsApi from "../api/jobs";

const fetchJobs = async ({ queryKey }) => {
  const [key, search] = queryKey;
  const params = { search };
  /*   console.log("fetchJobs param key -- ", key);
  console.log("fetchJobs param search -- ", search); */
  const res = await jobsApi.list(params);
  return res;
};

function AllJobs() {
  const router = useRouter();
  const { search } = router.query;
  const { data, status } = useQuery(["jobs", search], fetchJobs);

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
