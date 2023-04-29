import React from "react";

export default function ProductScreen({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
