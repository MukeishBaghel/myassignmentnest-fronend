import React from 'react'
import CommonLayout from '../../components/layouts/CommonLayout'

const RefundPolicy = () => {
    return (
        <CommonLayout>
            <section className='max-w-6xl px-4 sm:px-10 mx-auto py-10 sm:text-lg space-y-2 policy-heading'>

                <h1 className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center py-8 !font-bold sm:leading-[4rem]'>
                    Refund/Money-back Guarantee Policy
                </h1>
                <p className='mt-10'>The company is held responsible for delivering the product in a timely manner and according to the Customer requirements indicated in the order. Should any of the company's commitments be violated, the customer is entitled to a partial or a full reimbursement according to our policy.

                </p>
                <p> Our policy gives you the right to request reimbursement if our service failed to fulfil its duties towards you. As our service offers legitimate academic assistance, we want to be 100% sure that you leave fully satisfied! Our satisfaction rate is high. More than 95% of our customers return with consequential orders. However, sometimes things can go wrong, and in these cases, you can always refer to our refund policy. We want to emphasize that there are only certain situations when we can offer a full refund. These are:
                    No Delivery / Partial Delivery / Cancellation By Customer</p>
                <ul className='list-disc px-6 pt-4  flex flex-col gap-2'>
                    <li>No tutor assigned yet: This is a rare situation, but sometimes it happens. The amount of the refund is always 100%. If such a situation does occur, the customer should not worry since they will be notified as soon as possible.</li>

                    <li>The tutor was confirmed, and less than half of the deadline has passed but you decided to cancel the order. In this case, the refund amount varies from 100% to 75%, to cover the effort of the company and the tutor in their attempt to provide you with the product and services purchased.</li>
                    <li>The tutor was confirmed, and over half of the remaining deadline has passed, but the customer decided to cancel the order. The amount of refund can vary between 50%-0% to cover the tutor's and company's efforts to accommodate your order request.</li>

                    <li>Late Delivery: It can only happen if the tutor gets ill or in case of other emergencies. Customer reserves the right to request a refund in case of delays ONLY if the customer has NOT downloaded the work submitted by the tutor. In case the work delivered by the tutor has been downloaded, the customer is ineligible for a refund and is deemed to have used it.

                    </li>
                    <li>
                        On-time delivery of all the orders is guaranteed. Sometimes delays can happen due to the needed materials being uploaded too late by the customer. In this situation, no refund can be granted. That is why it is always ideal to send all information regarding the task, including any additional sources that must be used all at once when placing the order initially.
                    </li>
                </ul>
                <h1 className='text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-semibold py-8'> Work Not As Described</h1>
                <p>
                    The company provides customized work, specifically tailored for the requirement of the customer. The initial piece of work provided to the customer is a draft, for further development based on customer's feedback.
                </p>
                <ul className='list-disc px-6 pt-4  flex flex-col gap-2'>
                    <li>Disputed claims: If the customer is not satisfied with the quality and specifications of the work and would like to get a refund instead, the company would be obliged to take the concerns into consideration and rectify the issues. Based on the plan opted for, the customer can request correction till 30/45/60 days for Limited/Standard/Premium plan, respectively, from first submission date. In case the customer is still not satisfied, the customer has a right to request a refund by providing relevant evidence/documentary proof within 7 days of receiving the work. The refund claim will be approved or denied based on the result of the investigation which is highly dependent on the facts of the case and documentary evidence provided by the customer.</li>
                    <li>
                        Plagiarized content: If there is a claim that the work produced by the tutor is plagiarized, a third-party verifiable report should be provided by the customer needed within 72 hours of receiving the said work. In case the claim is substantiated, a full refund will be issued to the customer.
                    </li>
                </ul>

                <h1 className=''>Duplicate Order/Transaction</h1>
                <ul className='list-disc px-6  flex flex-col gap-2'>
                    <li>Accidental Duplicate Order: In order to cancel an order placed by mistake in duplicate, you need to contact the company within 24 hours of payment for the duplicate order and request for a refund. If the order is found to be duplicate and was ordered unintentionally, 100% refund will be issued</li>
                    <li>Accidental Duplicate Transaction: In case extra/duplicate payment is processed against the same order for which payment has already been done earlier, the same will be 100% refunded on filing a request</li>
                </ul>
                <h1 className=''>You Are Not Entitled To A Refund If:</h1>
                <ul className='list-disc px-6  flex flex-col gap-2'>
                    <li>
                        Receiving less grades: Please keep in mind that we DO NOT guarantee grades. The papers that we provide are tailored as draft samples only or as a point of reference and are not ready for submission and not to be submitted directly as one’s own work.
                    </li>
                    <li>Receiving less grades: Please keep in mind that we DO NOT guarantee grades. The papers that we provide are tailored as draft samples only or as a point of reference and are not ready for submission and not to be submitted directly as one’s own work.</li>
                    <li>Receiving less grades: Please keep in mind that we DO NOT guarantee grades. The papers that we provide are tailored as draft samples only or as a point of reference and are not ready for submission and not to be submitted directly as one’s own work.</li>
                    <li>
                        Documentary proof and process: In case the customer does not follow the guidelines and timelines laid out in Section 5 for filing of claims/complaints/refund requests
                    </li>
                </ul>
                <h1 className=''>Response/Refund Processing Timelines And Process</h1>
                <p>Owing to the nature of work which is subjective, a customer may have an opinion about the quality of the work and delivery which is different from that of the tutor. In such situations, customer is required to file any and all claims/ complaints/ refund requests in compliance with the following guidelines to be eligible for refund -</p>
                <ul className='list-disc px-6 pt-4 flex flex-col gap-2'>
                    <li>
                        Provide minimum 7 working days for evaluating and communicating decision on the request
                    </li>
                    <li>Any claim/ complaint/ refund request must be filed through the customer's account on the website along with required documentary proof, following all the terms and conditions laid out in this policy and terms of use
                    </li>
                    <li>Provide minimum 7 working days for processing refund after the decision has been communicated by the company</li>
                </ul>

            </section>
        </CommonLayout>
    )
}

export default RefundPolicy