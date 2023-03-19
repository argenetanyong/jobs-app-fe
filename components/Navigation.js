import { useState } from "react";
import Router from "next/router";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

function Navigation() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState("");
  const { classes, cx } = useStyles();

  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/all-jobs",
      label: "All Jobs",
    },
    {
      link: "/add-jobs",
      label: "Add Jobs",
    },
  ];

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        //console.log("event", link.link);
        event.preventDefault();
        setActive(link.link);
        Router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <Header height={60} mb={60}>
        <Container className={classes.header}>
          <MantineLogo size={28} />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Container>
      </Header>
    </>
  );
}

export default Navigation;
