import React from "react"
import { headlineMock } from "src/components/Headline/mock"
import Layout from "src/components/Layout"
import ProductHeadline from "src/components/ProductHeadline"
import TitleContainer from "src/components/TitleContainer"

export default function Headphones() {
  return (
    <Layout>
      <TitleContainer title="HEADPHONES" />
      <section className="max-w-6xl m-auto">
        <ProductHeadline product={headlineMock.product} />
        <ProductHeadline product={headlineMock.product} />
        <ProductHeadline product={headlineMock.product} />
      </section>
    </Layout>
  )
}
