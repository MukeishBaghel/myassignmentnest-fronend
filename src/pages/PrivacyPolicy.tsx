import React from 'react'
import CommonLayout from '../components/layouts/CommonLayout'

const PrivacyPolicy = () => {
    return (
        <CommonLayout>
            <section className='max-w-5xl px-4 sm:px-10 mx-auto py-10'>

                <h1 className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-bold'>
                    Privacy Policy
                </h1>
                <div className='mt-10 sm:text-lg'>
                    <p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
                    </p>
                    <ul className='list-disc px-6 pt-4 sm:pt-8 flex flex-col gap-2'>
                        <li> We have a strict zero tolerance policy for and information related to students and is kept within the bounds of company.

                        </li>
                        <li>  We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.</li>
                        <li>  We never share student or tutor information with any third party whatsoever.
                            All transactions are processed through Paypal and no card information is ever stored or processed on our servers.
                        </li>
                        <li> We reserve the right to disclose your personal identifiable information only if as required by law and when we believe that disclosure is necessary to protect our rights and/or to comply with a judicial proceeding, court order or legal process served on our Website.

                        </li>
                    </ul>
                    <p className='pt-4 sm:pt-8'>
                        Myassignmentnest.com reserves the right to modify this privacy statement any time, so please review it frequently. Any changes made to above policy will be posted here and your continued use of the site, services and/or software constitutes your agreement to be bound by such changes.
                    </p>

                </div>
            </section>
        </CommonLayout>
    )
}

export default PrivacyPolicy