import React from 'react';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		myFunction();
		function myFunction() {
			const body = document.body;
			const main = document.getElementById('main');
			const panels = Array.from(document.querySelectorAll('.panel'));
			const nav = document.getElementById('nav');
			const nav_links = Array.from(nav.children);
			console.log(nav_links);    


      // Play initial animations on page load.
			window.onload = function() {
				window.setTimeout(function() {
					body.classList.remove('is-preload');
				}, 100);
			};

			for (let link of nav_links) {
				link.onclick = (e) => {
					const href = e.target.href;
					if (href.charAt(0) !== '#') return;

					// Prevent default.
					e.preventDefault();
					e.stopPropagation();

					// Change panels.
					if (window.location.hash !== href) window.location.hash = href;
				};
			}

			(function() {
				let panel, link;
				if (window.location.hash || window.location.hash === '') {
					panel = panels.filter((item) => `#${item.id}` === window.location.hash);

					link = nav_links.filter((item) => item.href.split('/').slice(-1)[0] === window.location.hash)[0];
				}

				console.log('panels', panels);
				console.log('panel', panel);
				console.log('nav-links', nav_links);
				console.log('link', link);
				if (!panel || panel.length === 0) {
					console.log('Your here');
					panel = panels[0];
					link = nav_links[0];
				}

				let newPanels = panels.filter((item) => item !== panel);
				newPanels.forEach((item) => {
					console.log(item);
					item.classList.add('inactive');
					item.style.display = 'none';
				});

				link.classList.add('active');
				window.scrollTop = 0;
			})();

			window.onhashchange = (e) => {
				let panel, link;

				if (window.location.hash) {
					panel = panels.filter((item) => `#${item.id}` === window.location.hash)[0];
					link = nav_links.filter((item) => item.href.split('/').slice(-1)[0] === window.location.hash)[0];
					console.log(panel);
					if (panel.length === 0) return;
				} else {
					panel = panels[0];
					console.log('home-panel-log', panel);
					link = nav_links[0];
					console.log('home-link-log', link);
				}

				panels.forEach((item) => {
					item.classList.add('inactive');
				});
				nav_links.forEach((item) => {
					item.classList.remove('active');
				});
				link.classList.add('active');

				main.style.maxHeight = `${main.style.height}`;
				main.style.minHeight = `${main.style.height}`;

				console.log(link);
				setTimeout(() => {
					panels.forEach((item) => {
						item.style.display = 'none';
					});

					window.location.hash ? (panel.style.display = 'block') : (panel.style.display = 'flex');
					main.style.maxHeight = `${panel.style.offsetHeight}`;
					main.style.minHeight = `${panel.style.offsetHeight}`;

					window.setTimeout(() => {
						panel.classList.remove('inactive');
						main.style.maxHeight = ``;
						main.style.minHeight = ``;
					}, 500);
				}, 200);
			};

		}
	}

	render() {
		return (
			<React.Fragment>
				<nav id="nav">
					<a href="#" className="icon solid fa-home">
						<span>Home</span>
					</a>
					<a href="#work" className="icon solid fa-folder">
						<span>Work</span>
					</a>
					<a href="#contact" className="icon solid fa-envelope">
						<span>Contact</span>
					</a>
					<a href="#" className="icon brands fa-twitter">
						<span>Twitter</span>
					</a>
				</nav>

				<div id="main">
					<article id="home" className="panel intro">
						<header>
							<h1>Siva Kumar</h1>
							<p>Web Developer</p>
						</header>
						<a href="#work" className="jumplink pic">
							<span className="arrow icon solid fa-chevron-right">
								<span>See my work</span>
							</span>
							<img src="images/me.jpg" alt="" />
						</a>
					</article>

					<article id="work" className="panel">
						<header>
							<h2>Work</h2>
						</header>
						<p>
							Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum
							ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget
							interdum.
						</p>
						<section>
							<div className="row">
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/1.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/2.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/3.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/4.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/5.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/6.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/7.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/8.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/9.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/10.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/11.jpg" alt="" />
									</a>
								</div>
								<div className="col-4 col-6-medium col-12-small">
									<a href="#" className="image fit">
										<img src="images/12.jpg" alt="" />
									</a>
								</div>
							</div>
						</section>
					</article>

					<article id="contact" className="panel">
						<header>
							<h2>Contact Me</h2>
						</header>
						<form action="#" method="post">
							<div>
								<div className="row">
									<div className="col-6 col-12-medium">
										<input type="text" name="name" placeholder="Name" />
									</div>
									<div className="col-6 col-12-medium">
										<input type="text" name="email" placeholder="Email" />
									</div>
									<div className="col-12">
										<input type="text" name="subject" placeholder="Subject" />
									</div>
									<div className="col-12">
										<textarea name="message" placeholder="Message" rows="6" />
									</div>
									<div className="col-12">
										<input type="submit" value="Send Message" />
									</div>
								</div>
							</div>
						</form>
					</article>
				</div>

				<div id="footer">
					<ul className="copyright">
						<li>&copy; Untitled.</li>
						<li>
							Design: <a href="http://html5up.net">HTML5 UP</a>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
