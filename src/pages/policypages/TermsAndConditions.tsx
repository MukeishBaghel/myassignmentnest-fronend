import React from 'react'
import CommonLayout from '../../components/layouts/CommonLayout'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
    return (
        <CommonLayout>
            <section className='max-w-6xl px-4 sm:px-10 mx-auto py-10 policy-List '>
                <h1 className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-center font-bold '>
                    Terms of Use
                </h1>
                <div className='policy-heading mt-8 space-y-2'>
                    <p> Please Read These Terms Carefully Before Using our Service. The use of myassignmentnest.com is only to be undertaken by those of legal age. Any improper usage is strictly prohibited. Once you have placed an order on this website, you have confirmed that you have read, understood, and agreed with all our Terms and Conditions. Submitting a request and/or payment implies that you are legally obligated to abide by these Terms and Conditions.</p>
                    <h1>Interpretation Of Our Terms:</h1>

                    <ul>
                        <li>"Website" means myassignmentnest.com</li>
                        <li>"Consumer/Customer", "You" or "Yours" refers to anyone submitting, bidding, executing an order, uploading any information, and transferring payments on this website.</li>
                        <li>"Company," "We," or "Our" refers to myassignmentnest.com website, operated by Pravya Technologies, a company incorporated under the laws of India with a registration no: UDYAM-DL-07-0010604 and registered office at 1/2890, Ram Nagar, Shahdara, Delhi, India .</li>
                        <li>Messaging System is the software that ensures uninterrupted communication between the Customer and the Writer, or with a Support Team Representative.</li>
                        <li>Order refers to the actual request for a Service sent to our Company by the Customer. It includes particular requirements and a specification of sources to be used in writing.
                            <br />or <br />
                            An 'Order' is an electronic request for a paid service from the Customer for a particular writing service. An order specifies the scope of work and other requirements of the Customer regarding the service. or
                            "Order" refers to the written order that was submitted in electronic form online on our website by the consumer. An order includes the work in its entirety, along with its consumer requirements.
                        </li>
                        <li> Order Status shows the progress of the Order and current position towards completion.</li>
                        <li>Service is the result of an Order, which comes as original content, written and delivered to the Customer in accordance to their inquiry as a digital document.</li>

                        <li>Product Revision is a request sent by the Customer for editing the final version of the product, based on the initial requirements of the order.</li>
                        <li>Quality Assurance Department refers to the Company's structural unit responsible for evaluating and protecting the quality of our Products and Services.</li>
                        <li>The 'Quality Assurance Department' is the entity in myassignmentnest.com infrastructure, whose mission is to guard and evaluate the quality of the products and services provided.</li>
                        <li>Support Team or Support refers to the Company's structural unit responsible for coordinating and assisting the Order process.</li>

                        <li>The Writer is a person employed by the Company who provides research and writing services to the Customer, according to the Company Agreement.</li>
                        <li>Wallet refers to the personal account of the Customer within the Company that stores Credits for the Customer. Funds added to their personal balance are done voluntarily to further compensate the price of the order(s) at their own discretion.</li>
                        <li>Affiliate Program refers to a particular program targeted at existing Customers of the Company. The aim of the program is to reward regular clients with Credits to Personal Wallet for driving new Clients to the website. The commission rates (rewards) are defined by the Company and can be changed at its own discretion.
                        </li>
                    </ul>
                    <h1>Order Placing And Registration</h1>

                    <ul>
                        <li>The order is placed by completing the Order form provided in the Application. No Service is provided by other means than by request.</li>
                        <li>The Order form will specify the scope of the work, Order parameters, and delivery terms. It is Your personal responsibility to provide exact, full, and final information to each standard Order form section when filling in Our Order form.</li>
                        <li>You will be requested to register by providing Your contact information such as name, email address, country of residence, and telephone number. Should any difficulties arise during the process of account creation, please contact our Support. In addition, should any of your contact details change over time, it is your sole responsibility to update your profile accordingly or inform Support of such changes.</li>
                        <li>Should multiple accounts be discovered, they will be merged with your initial account created during Your first purchase.</li>
                        <li>By accessing or utilizing our Website, you confirm and guarantee that you do not reside in the following countries: the United Kingdom of Great Britain and Northern Ireland, the Commonwealth of Australia, New Zealand, Ireland. When using our Website, you affirm that you are not a resident of the following states within the United States of America: California, Colorado, Connecticut, Florida, Illinois, Maine, Maryland, Massachusetts, Nevada, New Jersey, New York, North Carolina, Oregon, Pennsylvania, Texas, Virginia, Washington. Our Services are neither advertised, offered, nor sold to residents of the abovementioned countries/states, and the information in these Terms and Conditions does not constitute an advertisement or an offer to provide services to residents of the abovementioned countries/states. You acknowledge, comprehend, and agree that your profile may be deleted, and services provided to you may be terminated without warning if you use the Website while being a resident of the abovementioned countries/states.</li>
                    </ul>


                    <h1>Order Payment And Discount</h1>

                    <ul>
                        <li>When placing an Order, you agree to buy the service from the Company. The Company starts to process your order only after the payment for the service is made and is authorised.</li>
                        <li>The payment for the service is calculated according to the Company's Pricing and is paid in advance, as stated in the Order form once the scope of work is identified. The Company is not held responsible for Service delivery until the payment has been made in full and has been authorised.</li>
                        <li>Orders can be paid with Credit Cards, Debit Cards or any means made available by the company
                            •	The Company reserves the right to offer discount and bonus programs to Customers at its own discretion using discount code(s) the Customer can use when filling out the Order form. If the code is not provided in the corresponding section of the Order form, the discount will not be given out by the Company for that particular order.</li>
                        <li>The Company commits to provide equal access to discount and bonus program information for each Customer in the Company with no exceptions.</li>

                        <li>Upon Your Order evaluation, the Company may request for additional payment or additional time to work on Your Order, since the impact of the work done to fulfil Your order can only be defined after a manual review is performed. The Customer may decide at their own will to either agree to new Order parameters and Order Total or refuse to cooperate with the Company. If the Client wishes to stop working with us – a refund will be processed according to the Money Back Guarantee Policy.</li>
                        <li>Pre-Bookings are non-transferable and non-refundable.
                        </li>
                    </ul>

                    <h1>Your Personal Wallet</h1>

                    <ul>   <li>When placing Orders and buying Products from the Company, You pay using any of the available payment methods at Your discretion. Should the case of partial or full payment reimbursement occur, You have the option to either proceed according to the Money Back Guarantee Policy, or to transfer funds to Credits in Your Personal Account.</li>
                        <li>1 credit equals 1 US Dollar and is stored in Your Personal Account with no limit or expiration date. The number of Credits you store may be used to proceed with payment for your future Orders with the Company.</li>
                        <li>Your funds are transferred to Credits at Your own will and ONLY with Your approval. After the transfer of funds to Credits is complete - the amount You store in Credits is Non-Refundable and may be used to pay for your future orders ONLY</li>
                        <li>As a part of our loyalty program activities, the Company may provide You with a certain amount of Credits to further cover payments for Your Future Orders.
                        </li>
                    </ul>

                    <h1>Order Process</h1>

                    <ul>
                        <li>Order validation: The Company reserves the right to re-check the Order details following the final payment to confirm whether the requirements of the assignment were met successfully as indicated by the Customer. Should a mismatch occur, Support reserves the right to modify the order to ensure that the Customer's requirements have been adhered too.</li>
                        <li>Order volume: Each order placed by the Customer has a required volume, which is measured by the number of words. Upon the Service delivery, the document received has to match the expected number of words metric (the document may have fewer pages than requested, but should have an exact number of words according to the «250 words per page double spaced or 500 words per page single-spaced» rule). Should there be a page/number of words mismatch, the Client may request to reformat the product to match the number of words/pages according to «250 words per page double spaced or 500 words per page single-spaced» rule.</li>
                        <li>Changes in order details: Customer and Support may provide changes to the scope of work only if the Writer has not started the work yet. No changes can be made once the Writer has started researching and working on the order. Should the order details increase in volume, order complexity, or narrow the completion terms, the Customer will be asked to provide additional compensation for the additional instructions.</li>
                        <li>Resources: Should the Customer require specific resource material to be utilised in the production process, they must specify those resources and provide them to the Writer. If the specified resources are not provided, and the Writer is responsible for locating and paying for them, additional charges shall be incurred and must be paid before delivery can be made. In general, the following deadlines for orders are in place:</li>
                        <ul>
                            <li>or orders due within 12-24 hours, resources must be supplied within 30 minutes of the order placement.</li>
                            For orders due within 24-72 hours, there is a 1-hour deadline.
                            <li>For orders with a 72+ hour deadline, resources must be received a day in advance.</li>
                            <li>
                                If the Customer did not provide materials within the deadline for providing said resources, then extra payment and time for the completion of the order would be required.</li>
                            <li>Communication: The Customer is highly encouraged to communicate with the Writer using the Messaging System or by contacting the Support team directly when seeking more information.</li>
                            <li>
                                Progress Tracking: The Customer may track the progress of their order by using their personal account, where information about their order and its status is displayed. The Customer may as well contact Support by using all communication means, which are available 24/7, to get updates on the Order status.
                            </li>
                        </ul>
                    </ul>



                    <h1>Order Delivery</h1>

                    <ul>
                        <li>The Company is held responsible for the delivery of the service and for meeting the deadline indicated in the order.
                        </li>
                        <li>It is the Customer's personal responsibility to ensure the availability of delivery channels once the Company has provided the service to the Client. The Company will not be held responsible for an incorrect email address indicated by the Customer in the profile, spam filters, internet outages and general customer negligence to provide communication channels and other contact means which are beyond the control of the Company. The Customer is encouraged to contact Support for any kind of assistance with an Order's Delivery.

                        </li>
                        <li>The Customer is held responsible for downloading the service in a timely manner after the service has been provided by the Company.

                        </li>
                        <li>All orders are delivered through our the customer’s account on the website through the orders page.</li>
                        <li>Seven days after the deadline, the funds will be released automatically, as this is a part of our Writer's </li>
                        <li>protection. Please review each order carefully. Once the entire agreed-upon sum is received by the Writer, it is deemed that the work done is complete, and no refund will be made.

                        </li>
                    </ul>
                    <h1>Order Revision</h1>
                    <ul>
                        <li>Free amendments are provided to the Customer by the Company to ensure the quality of the product provided and to ensure total Customer satisfaction with the product. To receive a free revision of the product, the Customer has to submit a revision request in written form using the Messaging System within (45/60/90) calendar days after the Order delivery date and no later than thirty (30) calendar days after the Order delivery date for any dissertation, thesis, research proposal, thesis proposal, dissertation chapters writing or any other reasonably large assignments. Should the revision deadline be missed, the Customer may have their order revised for additional payment or place an order for editing.

                        </li>
                        <li>
                            The Quality Assurance Department reserves the right to decline a revision request if the revision instructions violate initial Order instructions. In such cases, the Customer may be requested to pay additionally for the requested changes or place an order for editing.
                        </li>
                        <li>
                            The Quality Assurance Department reserves the right to decline or limit multiple revision requests if the Customer's behaviour demonstrates obvious exploitation of the Writer and other unreasonable requests.
                        </li>
                        <li>If the request meets all defined requirements underlined in these Terms and Conditions, our Company will revise the delivered service free of charge.</li>

                    </ul>

                    <h1>The Use Of Products</h1>
                    <ul>
                        <li>When making a payment for an Order, you agree it is for personal and non-commercial use only, and the payment you make is a reflection of the time and effort put into conducting relevant research and writing pertaining to your order as well as all the necessary maintenance and administration for Service delivery.</li>
                        <li>You are not to reproduce, modify, distribute or display the service in any way on the World Wide Web or in the form of a hard copy over a reasonable limit necessary for personal use.</li>
                        <li>Writers who work on behalf of our Company hand over the ownership of all delivered Products to the Company, that retains full copyright privileges of the Products We provide.</li>
                        <li>All Products are provided solely as an example of research, reference for learning purposes, or as a sample on how to perform academic writing. All Intellectual Property Rights and Copyright remain with the Company.
                        </li>
                    </ul>
                    <h1>Company's Responsibility</h1>
                    <ul>
                        <li>The Company has a zero-tolerance policy regarding plagiarism, academic dishonesty, and fraud. We will not be held accountable if such unethical and illegal use of our products and Website content occurs.</li>
                        <li>We strictly abide by all Copyright laws. Any opposing activity is solely the responsibility of the Customer if they break our Terms and Conditions.</li>
                        <li>Disclaimer for Links Used on myassignmentnest.com: While this website may include links to other websites, we do not condone, approve, or guarantee that the content of these links complies with the Terms and Conditions of myassignmentnest.com. As such, our Company does not own, is not responsible for, and does not contribute or control any of the content stemming from the posted links on our website. Visiting these links is agreed upon as your own risk based upon the user agreement form that is submitted with your order form.</li>
                        <li>
                            Security and Privacy: Our Privacy Statement posted on this website may be referred to for more detailed information regarding our Company's practices and policies concerning the collection, storage, and use of Client and online guests' information. To learn more about your personal informations security while using this website, please visit the Privacy Policy webpage. The Company reserves the right to contact the customers by email regarding new services, discounts, special offers, and any other information that the Company may deem useful for the customers. However, with that in mind it is important to note that we highly value the privacy of our customers and will not disclose their personal and billing information to any third parties. To ensure their data remains protected, the Company processes all transactions through a secure online payment system. Note: It is important to note that the Company cannot be held responsible if credit information gets disclosed without our Company's consent or beyond its control. Should any privacy or security questions arise, the Customer is welcomed to refer to our Privacy Policy.
                        </li>
                    </ul>

                    <h1>    Warranties</h1>
                    <p>
                        Once you have submitted your order or payment, you agree and acknowledge all of the following points and statements: All our written products for or by Consumers are solely intended to be used for research, reference, or learning purposes on how to properly write an academic paper within a certain citation style (i.e. APA, MLA, Chicago, Harvard, etc.). All and any information as well as ideas that are used from the provided written works must be properly cited if they are referenced at a later date. All consumers agree that all services rendered on this website require payment for the time and effort that are used to gather, organise, correct, edit, and deliver the service to the consumer after completion. Additionally, payment is used to maintain the website for further educational use by our Consumers. Other than a conservative number of printed copies for personal and educational use, the distribution, publication, transmission, modification, display, or derivative works may not be created from the final delivered service by the Company without prior written consent from the Company. All written products from our freelance consumers automatically transfer all authorship rights and ownership to the Company and/or its partners. You, the consumer, agree to destroy any and all delivered products from the Company after your research/reference purposes for the paper have been completed. No copies for redistributive purposes are allowed nor are our works to be used elsewhere without proper consent or citation. By using our services, you the consumer agree to receive promotional information such as specials, contests, and discounts from the Company. You may unsubscribe from or subscribe to receiving such information in your profile directly. Our Company makes no warranties or representations of warranties in regard to our website or its materials, stated or implied, that arise by law or otherwise. This includes, without any limitation, a warranty of merchantability or suitability for a non-infringement, particular purpose, or any other implied guarantee or warranty that arises from the performance or deal with usage of trade. Additionally, the Company does not guarantee that our operation will run error-free, and we are not responsible for any repercussions from any errors that arise on our website. It is up to the consumer to ensure the accuracy, usefulness, or completeness with any opinion, information, advice, or other content that is related to this service or available on this website. Please seek professional opinions before using any available services on our website.
                    </p>
                    <h1>
                        Limitation Of Liability
                    </h1>
                    <p>
                        Agreeing to all the above Terms and Conditions, you acknowledge that you agree not to hold other Consumers, the Company, its employees, shareholders, agents, officers, directors, representatives, promotion, affiliates, subsidiaries, advertising, fulfillment agencies, or any other third-party providers or information/data sources and legal advisors responsible for any and all losses, damages, rights, actions, and claims of any nature that come from or are related to our Company. These products include but are not limited to
                    </p>
                    <ul className='!list-none'>
                        <li> (a) telephone, hardware or software, electronic, Internet, email, network, computer malfunctions, difficulties or failures of any kind.</li>
                        <li>(b) unclear, failed, delayed, or incomplete computer communications and transmissions;</li>
                        <li> (c)any condition that arises due to the events that lie beyond the Company's control that cause the service to be delayed, disrupted, or corrupted.</li>
                        <li>(d) any injuries, losses, or damages of any kind that arise with connection to or as a result of using our services</li>
                        <li>
                            (e) any typographical errors or printing mistakes in any of our materials associated with our services.
                        </li>
                    </ul>
                    <p>    Additionally, you agree to not hold our Company and its affiliates responsible or reprehensible for any claim, demand, suit, including attorney's fees, made by another third party in relation to or arising from the use of our service, your breach or violation of these Terms and Conditions, the violation by you of the rights of any third party, or any other personal act of omission committed by you. Under no circumstance will the Company be made responsible or liable for any direct, indirect, punitive, incidental, consequential, or special damages that arise from or are in any way related to the use of this website and any of its provided information. Some states and jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages. As such, the above-listed limitation may not be applicable to you.</p>
                    <p>
                        Termination: We reserve the right to terminate your right to use our Services even when you have paid the full amount if the information initially provided for registration on our Services or that is later subsequently modified, contains false or misleading information, or conceals or omits any information we consider as being relevant; if you do not cooperate throughout the ordering process; if we suspect that you are involved in any fraudulent transactions. Any attempt to undermine or cause harm to myassignmentnest.com's server or its customers is strictly prohibited and will be subject to automatic account termination. This includes spamming, transmission of - malware, viruses, trojan horses; or by linking to sites and files that contain or distribute them. Myassignmenthelp.com may terminate your account and forfeit any fee to be paid at any time without prior notice, if you are in breach of the terms of this Agreement. The Company will be the sole arbiter as to what constitutes a violation of the Agreement.
                        Refunds: The customer, agrees to abide by the terms laid out in the refund and revision policy outlined in the link - <Link to={'https://myassignmentnest.com/revision-refund-policy.html'}>https://myassignmentnest.com/revision-refund-policy.html</Link>
                        Amendments: You, the consumer, acknowledge and agree that these Terms and Conditions may be completely or unilaterally changed by the Company without prior warning. It is, therefore, highly recommended that all Consumers on our website read these Terms and Conditions from time-to-time to see if any changes have been made.
                        Governing Law: These Terms of Use and any non-contractual obligations arising out of or in connection with them shall be governed by, and construed in accordance with the laws of the Republic of India. Any dispute, controversy or claim arising out of or in connection with these Terms of Use, or the breach, termination or invalidity thereof, shall be finally settled by courts of the Republic of India.

                    </p>

                </div>
            </section>
        </CommonLayout >
    )
}

export default TermsAndConditions