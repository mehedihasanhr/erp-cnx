'use client';

import { Icon } from '@/assets/Icon/Icon';
import Error from '@/components/ui/Error';
import { Input } from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import React, { ChangeEvent } from 'react';

export default function Login() {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    // Handle email change
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };

    // Handle password change
    const handlePassChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    // Handle login process
    const handleLogin = (e: any): void => {
        e.preventDefault();
        console.log('object');
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <form className="my-2" onSubmit={handleLogin}>
                        <div className="flex justify-center mb-5">
                            <div className="p-3 bg-green-500 rounded-full">
                                <Icon icon="lock" className="h-6 w-6 fill-white" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="email" required={true} className="mb-1">
                                Email
                            </Label>
                            <Input
                                required={true} // to show * icon with label
                                onChange={handleEmailChange}
                                className="focus:border-[#c9c9c9]"
                                id="email"
                                type="text"
                                value={email}
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" required={true} className="mb-1">
                                Password
                            </Label>
                            <Input
                                required={true}
                                onChange={handlePassChange}
                                className="focus:border-[#c9c9c9]"
                                id="password"
                                type="password"
                                showIcon={true} // to show eye icon in password field
                                value={password}
                            />
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="border w-full mt-5 py-2 rounded font-semibold text-white bg-green-500 cursor-pointer"
                                value="Login"
                            />
                        </div>
                    </form>
                    {/* error component  */}
                    <Error message="hello js" />
                </div>
            </div>
        </div>
    );
}
