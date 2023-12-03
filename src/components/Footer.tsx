"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Link, Typography } from "@mui/material";

export default function SimpleContainer() {
  return (
    <Box sx={{ bgcolor: "#ffffff", height: "100px" }}>
        <Grid container className="px-5 py-4">
          <Grid item xs={12} md={6}>
            <Typography className="md:text-left text-center" variant="body2">Copyright © Restent Ou & SliverRiver 2019 - {new Date().getFullYear()}</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className="md:text-right text-center" variant="body2">Powered by <Link href="https://nextjs.org" underline="hover">Next.js</Link> · Designed by SliverRiver</Typography>
          </Grid>
        </Grid>
    </Box>
  );
}
