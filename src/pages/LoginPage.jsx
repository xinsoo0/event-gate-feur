import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/icons/form/Input'
import Card from '../components/icons/Card'
import SignUpButton from '../components/icons/SignUpButton'

const LoginPage = () => {
    return (
        <MainLayout>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                    <Card>
                        <h1 className="text-2xl font-bold mb-4 text-center"> Log in</h1>
                        <Input
                            name="email"
                            placeholder="Enter Your Email"
                            label="Email"
                            type="text"
                        />
                        <Input
                            name="Password"
                            placeholder="Enter Your Password"
                            label="Password"
                            type="password"
                        />
                        <button
                            className="btn btn-primary rounded-full mt-3">
                            <SignUpButton className="text-sm" />
                            Submit
                        </button>

                    </Card>
                </div>
            </div>
        </MainLayout >
    )
}

export default LoginPage