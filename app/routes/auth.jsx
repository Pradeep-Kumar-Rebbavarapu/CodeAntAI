import React, { useState } from 'react';
import { Button } from "..//components/ui/button";
import { Card } from "..//components/ui/card";
import { Github, Link2Icon } from 'lucide-react';

const Auth = () => {
    const [selectedOption, setSelectedOption] = useState('saas');

    return (
        <div className="min-h-screen w-full grid lg:grid-cols-2">
            {/* Stats Section - Desktop Only */}
            <div className="hidden lg:flex items-center justify-center p-8 relative bg-white ">
                <div className="absolute bottom-0 left-0 opacity-100">
                    <img
                        src="/images/auth-bg.png"
                        alt="Background ant"
                        className="object-contain"
                    />
                </div>

                <div className="relative z-10 w-full max-w-[600px] min-h-[400px] ">
                    {/* Stats Card */}
                    <Card className="absolute top-0 left-0 p-6 shadow-sm bg-white rounded-2xl w-[400px] shadow-[0px_0px_20px_2px] shadow-gray-300">
                        <div className="flex items-center gap-3 mb-8">
                            <img src="/images/logo.png" alt="CodeAnt Logo" className="w-8 h-8" />
                            <span className="font-medium text-gray-900">AI to Detect & Autofix Bad Code</span>
                        </div>

                        <div className="grid grid-cols-3 gap-12 text-center">
                            <StatsItem value="30+" label="Language Support" />
                            <StatsItem value="10K+" label="Developers" />
                            <StatsItem value="100K+" label="Hours Saved" />
                        </div>
                    </Card>

                    {/* Issues Card */}
                    <Card className="absolute top-36 left-52 p-6 shadow-sm bg-white rounded-2xl w-fit flex shadow-[0px_0px_20px_2px] shadow-gray-300">
                        <div className="mr-5">
                            <div className="w-12 h-12 mb-4">
                                <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="28.8333" cy="28.5885" rx="28" ry="28.3832" fill="#9D90FA" fill-opacity="0.25" />
                                    <path d="M38.4336 27.755H28.6555V17.843C28.6555 17.7211 28.5571 17.6213 28.4368 17.6213H27.7258C26.2911 17.6198 24.8701 17.9055 23.5445 18.462C22.219 19.0185 21.0148 19.8349 20.0012 20.8643C19.0033 21.8728 18.2083 23.0683 17.6606 24.3844C17.0918 25.7509 16.802 27.2006 16.802 28.6974C16.802 30.1941 17.0918 31.641 17.6606 33.0075C18.2102 34.3241 18.9977 35.5104 20.0012 36.5277C21.0047 37.5449 22.1723 38.3432 23.4739 38.9003C24.8196 39.4791 26.2668 39.776 27.7286 39.7735C29.1633 39.7749 30.5843 39.4892 31.9099 38.9327C33.2354 38.3762 34.4396 37.5598 35.4532 36.5305C36.4567 35.5132 37.2442 34.3297 37.7938 33.0103C38.3647 31.6462 38.6577 30.1792 38.6551 28.6974V27.9767C38.6524 27.8547 38.554 27.755 38.4336 27.755ZM40.8372 26.2166L40.7661 25.435C40.5336 22.8849 39.418 20.479 37.6188 18.6635C35.8213 16.8428 33.4525 15.7163 30.9223 15.4787L30.1485 15.4066C30.02 15.3955 29.9106 15.4953 29.9106 15.6256V26.261C29.9106 26.3829 30.009 26.4827 30.1293 26.4827L40.6184 26.455C40.7469 26.4522 40.8481 26.3441 40.8372 26.2166Z" fill="#9D90FA" />
                                </svg>

                            </div>
                            <div className="text-sm text-gray-500">Issues Fixed</div>
                            <div className="text-3xl font-semibold text-gray-900">500K+</div>
                        </div>
                        <div className="ml-5">
                            <div className='flex'>
                                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" className='translate-y-[4px] mr-2' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83325 5.65698L5.83325 1.65698L9.83325 5.65698" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.83325 1.65698L5.83325 11.9861" stroke="#0049C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                <span className="text-blue-600 font-bold">14%</span>
                            </div>

                            <span className="text-gray-500 font-bold">This week</span>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Auth Section */}
            <div className="flex items-center justify-center p-6 bg-gray-50 border-2 ">
                <div className="w-full p-10 min-h-[620px] space-y-8 border-2 bg-white rounded-2xl">
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="flex items-center gap-2">
                                <img src="/images/logo.png" alt="CodeAnt Logo" className="w-8 h-8" />
                                <span className="text-xl font-semibold">CodeAnt AI</span>
                            </div>
                        </div>
                        <h1 className="text-2xl font-semibold text-gray-900">Welcome to CodeAnt AI</h1>
                    </div>

                    <div className="flex p-1 bg-gray-100 rounded-lg">
                        <Button
                            variant={selectedOption === 'saas' ? 'default' : 'ghost'}
                            className={`w-full rounded-md ${selectedOption === 'saas' ? 'bg-blue-600 text-white' : 'text-gray-600'
                                }`}
                            onClick={() => setSelectedOption('saas')}
                        >
                            SAAS
                        </Button>
                        <Button
                            variant={selectedOption === 'self-hosted' ? 'default' : 'ghost'}
                            className={`w-full rounded-md ${selectedOption === 'self-hosted' ? 'bg-blue-600 text-white' : 'text-gray-600'
                                }`}
                            onClick={() => setSelectedOption('self-hosted')}
                        >
                            Self Hosted
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {selectedOption === 'saas' ? (
                            <>
                                <AuthButton
                                    icon={<Github className="w-5 h-5" />}
                                    text="Sign in with Github"
                                />
                                <AuthButton
                                    icon={
                                        <svg viewBox="0 0 16 16" className="w-5 h-5" fill="#0065CC">
                                            <path d="M0 3.27A2.27 2.27 0 012.27 1h11.46A2.27 2.27 0 0116 3.27v9.46A2.27 2.27 0 0113.73 15H2.27A2.27 2.27 0 010 12.73V3.27z" />
                                            <path fill="#fff" d="M8 12.07L3.26 5.9h9.48L8 12.07zm0-6.17L3.26 10.1h9.48L8 5.9z" />
                                        </svg>
                                    }
                                    text="Sign in with Bitbucket"
                                />
                                <AuthButton
                                    icon={
                                        <svg viewBox="0 0 32 32" className="w-5 h-5">
                                            <path fill="#0078D4" d="M2 2h28v28H2z" />
                                            <path fill="#FFF" d="M16 8l-6 6h4v10h4V14h4l-6-6z" />
                                        </svg>
                                    }
                                    text="Sign in with Azure Devops"
                                />
                                <AuthButton
                                    icon={
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FC6D26">
                                            <path d="M23.76 11.37L12 .16.24 11.37l2.87 8.63L12 23.84l8.89-3.84 2.87-8.63z" />
                                        </svg>
                                    }
                                    text="Sign in with GitLab"
                                />
                            </>
                        ) : (
                            <>
                                <AuthButton
                                    icon={
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FC6D26">
                                            <path d="M23.76 11.37L12 .16.24 11.37l2.87 8.63L12 23.84l8.89-3.84 2.87-8.63z" />
                                        </svg>
                                    }
                                    text="Self Hosted GitLab"
                                />
                                <AuthButton
                                    icon={<Link2Icon className="w-5 h-5" />}
                                    text="Sign in with SSO"
                                />
                            </>
                        )}
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        By signing up you agree to the{' '}
                        <a href="/privacy" className="text-gray-900 hover:underline">
                            Privacy Policy
                        </a>
                        .
                    </div>
                </div>
            </div>
        </div>
    );
};

const StatsItem = ({ value, label }) => (
    <div>
        <div className="text-xl font-semibold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
    </div>
);

const AuthButton = ({ icon, text }) => (
    <Button
        variant="outline"
        className="w-full justify-start gap-3 px-4 py-6 h-auto text-gray-700 border-gray-200 hover:bg-gray-50"
    >
        {icon}
        {text}
    </Button>
);

export default Auth;