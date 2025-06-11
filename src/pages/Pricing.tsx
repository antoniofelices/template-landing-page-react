import DefaultLayout from '@layouts/DefaultLayout'
import Hero from '@components/sections/Hero'
import Cards from '@components/sections/Cards'
import Aside from '@/components/sections/Aside'
import heroPricingData from '@data/pricing/hero'
import listPricingData from '@data/pricing/list'
import asidePricingData from '@data/pricing/aside'
import illustrationFeaturesTab2 from '@/assets/images/illustration-features-tab-3.svg'

const Pricing = () => {
    return (
        <DefaultLayout>
            <Cards content={listPricingData} />
            <Hero
                content={heroPricingData}
                image={illustrationFeaturesTab2}
                backgroundImage={false}
                classes="bg-gray-200 text-blue-900"
            />
            <Aside content={asidePricingData} />
        </DefaultLayout>
    )
}

export default Pricing
