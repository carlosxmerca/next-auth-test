'use client'

import React from 'react'
import { signOut } from "next-auth/react"

export default function LogOut() { 
    return (
        <button onClick={() => signOut()}>Sign out</button>
    )
}