import scss from "./Welcome.module.scss";

const Welcome = () => {
	return (
		<section className={scss.Welcome}>
			<div className="container">
				<div className={scss.content}>
					<h3>Welcome</h3>
				</div>
			</div>
		</section>
	);
};

export default Welcome;
