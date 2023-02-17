import React from "react"
import * as S from "./styles"

interface MainTypes {
  title: string
  description: string
}

export default function index({ title, description }: MainTypes) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration src="/astro2.jpg" alt="" />
    </S.Wrapper>
  )
}
