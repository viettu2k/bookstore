import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";
import Search from "../core/Search";

export default function ManageProducts() {
  return (
    <Layout
      title="Manage Products"
      description="Perform CRUD on products"
      className="container-fluid"
    >
      <div className="row">
        <div>
          <Search />
          <h2 className="mb-4">Manage Products</h2>
        </div>
      </div>
    </Layout>
  );
}
