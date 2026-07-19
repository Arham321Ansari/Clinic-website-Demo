import whyChoose from "../../data/whyChoose";
import SectionTitle from "../Common/SectionTitle";

function WhyChoose() {

return (

<section className="py-24 bg-slate-50">

<div className="max-w-7xl mx-auto px-6">

<SectionTitle

center

subtitle="Why Choose Us"

title="Why Thousands Trust Our Clinic"

description="Providing compassionate healthcare using advanced medical technology and experienced specialists."

/>

<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

{whyChoose.map((item)=>{

const Icon=item.icon;

return(

<div

key={item.id}

className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"

>

<div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center">

<Icon

size={30}

className="text-teal-600"

/>

</div>

<h3 className="text-2xl font-bold mt-6">

{item.title}

</h3>

<p className="text-gray-600 mt-4 leading-7">

{item.description}

</p>

</div>

);

})}

</div>

</div>

</section>

);

}

export default WhyChoose;