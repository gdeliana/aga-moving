import React from 'react';
import LazyImage from '../components/LazyImage';


export default class Testimonials extends React.Component {
	state = {
		testimonials: [
			{
				text: '"Armand did a great job moving a sofa from Prague to my cottage in the forest 30km away; showed up on time, maneuvered the truck in the deep woods, removed the old one, and all without complaint and for a reasonable price. I would recommend his company without hesitation."',
				foto: "http://agamoving.cz/images/foto5.jpg"
			},
			{
				text: '"Armand and his team did a great job moving us. Their service was excellent, they were friendly competent and reliable. No matter where you want to move in Europe - AGA Van Transport really is a fine address."',
				foto: "http://agamoving.cz/images/foto4.jpg"
			},
			{
				text: '"Armand moved us back to Prague from England this year. The whole experience was painless and perfect. I would recommend him to anyone, he was very friendly, helpful and professional. Top man! Steve & Julia Clifford."',
				foto: "http://agamoving.cz/images/foto1_1.jpg"
			}
		]
	}
	render = () => (
		<div className="row">
			<div className="col-12">
				{this.state.testimonials && this.state.testimonials.map((testimonial, key) => {
					let Img = () => (
						<div className="d-none d-sm-flex col-sm-3">
							<LazyImage withModal src={testimonial.foto} type="background" />
						</div>
					);
					let ImgMobile = () => (
						<div style={{
							marginBottom: '15px',
							marginTop: '10px'
						}} className="col-12 d-sm-none">
							<LazyImage withModal src={testimonial.foto} type="background" />
						</div>
					);
					let Text = () => (
						<div className="col-12 col-sm-9" >
							<p>{testimonial.text}</p>
						</div>
					)
					let Inner = null;
					switch((key % 2)){
						case 0:
							Inner = () => (
								<React.Fragment>
									<Img />
									<Text />
								</React.Fragment>
							)
						break;
						case 1:
							Inner = () => (
								<React.Fragment>
									<Text />
									<Img />
								</React.Fragment>
							)
						break;
					}
					return (
						<div key={key} className="row" style={{
							alignItems: "center",
							marginBottom: "15px",
							borderBottom: "1px solid grey",
							paddingBottom: "15px"
						}}>
							<ImgMobile />
							<Inner />
						</div>
					)
				})}
			</div>
		</div>
	)
}
