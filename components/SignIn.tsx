"use client"

import React from 'react'
import { signIn } from "next-auth/react"

export default ({ email, password }) => (
  <button className='bg-[#84cc16] btn btn-primary rounded p-3 text-white' onClick={() => signIn("credentials", { email, password })}>Sign in with credentials</button>
)