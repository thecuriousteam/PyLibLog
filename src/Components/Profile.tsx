import React from "react";

const Profile = () => {
	return (
		<div className="newfont">
			<h2 className="font-bold md:text-[26px] text-[20px] px-6 pt-6">
				Profile
			</h2>
			<div className="flex lg:flex-row flex-col p-6 gap-4">
				<div className="bg-[#f9fafb] rounded-xl lg:w-[30%] h-full">
					<div className="bg-white p-6 rounded-xl space-y-2">
						<div className="">
							<img
								src="https://demo.themesberg.com/windster-pro/images/users/jese-leos-2x.png"
								loading="lazy"
								alt="profile"
								className="w-[80px] h-[80px] rounded-lg"
							/>
							<h3 className="font-bold text-[20px] my-2">Mustafa Azad</h3>
						</div>
						<div className="text-[#53537b] flex items-center text-sm">
							<svg
								className="w-[20px] h-[20px] text-black/80"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
									clip-rule="evenodd"
								></path>
								<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
							</svg>
							<span className="ml-2">Full-Stack Developer</span>
						</div>
						<div className="text-[#53537b] flex items-center text-sm">
							<svg
								className="w-[20px] h-[20px] text-black/80"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span className="ml-2">Califonia, USA</span>
						</div>
						<div className="pt-2 px-1">
							<h4 className="text-[#53537b] font-medium text-sm">
								Email Address:
							</h4>
							<p className="text-black font-medium text-sm">
								mustafa@gmail.com
							</p>
						</div>
						<div className="pt-2 px-1">
							<h4 className="text-[#53537b] font-medium text-sm">
								Home Address:
							</h4>
							<p className="text-black font-medium text-sm">
								92 Miles Drive, Newark, NJ 07103, California, United States of
								America
							</p>
						</div>
						<div className="pt-2 px-1">
							<h4 className="text-[#53537b] font-medium text-sm">
								Phone number:
							</h4>
							<p className="text-black font-medium text-sm">
								+00 123 456 789 / +12 345 678
							</p>
						</div>
						{/* Software Skills */}
						<div className="pt-2 px-1">
							<h4 className="text-[#53537b] font-medium text-sm">
								Software Skills:
							</h4>
							<div className="flex flex-wrap gap-2 mt-2">
								<svg
									className="w-[30px] h-[30px]"
									viewBox="0 0 17 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.1558 0.559692H1.51087C0.676432 0.559692 0 1.23742 0 2.07346V15.7446C0 16.5806 0.676432 17.2583 1.51087 17.2583H15.1558C15.9902 17.2583 16.6667 16.5806 16.6667 15.7446V2.07346C16.6667 1.23742 15.9902 0.559692 15.1558 0.559692Z"
										fill="#DC395F"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M6.58437 4.80783C6.58437 5.37806 6.12024 5.81314 5.56621 5.81314C5.01217 5.81314 4.54817 5.378 4.54817 4.80783C4.54817 4.23799 5.01217 3.80298 5.56621 3.80298C6.12024 3.80298 6.58437 4.23799 6.58437 4.80783ZM3.36574 11.9506C3.36574 11.726 3.39575 11.4506 3.45558 11.1956H3.45565L4.21913 8.07017H3.03638L3.39575 6.74185H6.24055L5.1175 11.2051C5.04263 11.4903 5.01268 11.7269 5.01268 11.8916C5.01268 12.1771 5.15292 12.2605 5.37219 12.3101C5.50572 12.34 6.56971 12.3191 7.14895 11.029L7.88658 8.07017H6.68872L7.0481 6.74185H9.60826L9.27896 8.24995C9.72805 7.40973 10.6265 6.61139 11.5098 6.61139C12.4531 6.61139 13.2317 7.28469 13.2317 8.57479C13.2317 8.90471 13.1867 9.2638 13.067 9.66874L12.5878 11.3933C12.543 11.5737 12.5129 11.7235 12.5129 11.8585C12.5129 12.1584 12.6327 12.3083 12.8573 12.3083C13.0819 12.3083 13.3664 12.1429 13.6958 11.2284L14.3546 11.4832C13.9652 12.8483 13.2616 13.4181 12.3782 13.4181C11.345 13.4181 10.8511 12.8035 10.8511 11.9631C10.8511 11.7233 10.8809 11.4681 10.9558 11.213L11.4499 9.44292C11.5098 9.24782 11.5248 9.06798 11.5248 8.90289C11.5248 8.33305 11.1805 7.98786 10.6265 7.98786C9.92271 7.98786 9.45858 8.49397 9.219 9.46901L8.26067 13.3201H6.58391L6.88488 12.1099C6.39198 12.9211 5.70741 13.4235 4.86301 13.4235C3.84484 13.4235 3.36574 12.8359 3.36574 11.9506Z"
										fill="white"
									></path>
								</svg>
								<svg
									className="w-[30px] h-[30px]"
									viewBox="0 0 17 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.1558 0.559692H1.51087C0.676432 0.559692 0 1.23742 0 2.07346V15.7446C0 16.5806 0.676432 17.2583 1.51087 17.2583H15.1558C15.9902 17.2583 16.6667 16.5806 16.6667 15.7446V2.07346C16.6667 1.23742 15.9902 0.559692 15.1558 0.559692Z"
										fill="#DC395F"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M6.58437 4.80783C6.58437 5.37806 6.12024 5.81314 5.56621 5.81314C5.01217 5.81314 4.54817 5.378 4.54817 4.80783C4.54817 4.23799 5.01217 3.80298 5.56621 3.80298C6.12024 3.80298 6.58437 4.23799 6.58437 4.80783ZM3.36574 11.9506C3.36574 11.726 3.39575 11.4506 3.45558 11.1956H3.45565L4.21913 8.07017H3.03638L3.39575 6.74185H6.24055L5.1175 11.2051C5.04263 11.4903 5.01268 11.7269 5.01268 11.8916C5.01268 12.1771 5.15292 12.2605 5.37219 12.3101C5.50572 12.34 6.56971 12.3191 7.14895 11.029L7.88658 8.07017H6.68872L7.0481 6.74185H9.60826L9.27896 8.24995C9.72805 7.40973 10.6265 6.61139 11.5098 6.61139C12.4531 6.61139 13.2317 7.28469 13.2317 8.57479C13.2317 8.90471 13.1867 9.2638 13.067 9.66874L12.5878 11.3933C12.543 11.5737 12.5129 11.7235 12.5129 11.8585C12.5129 12.1584 12.6327 12.3083 12.8573 12.3083C13.0819 12.3083 13.3664 12.1429 13.6958 11.2284L14.3546 11.4832C13.9652 12.8483 13.2616 13.4181 12.3782 13.4181C11.345 13.4181 10.8511 12.8035 10.8511 11.9631C10.8511 11.7233 10.8809 11.4681 10.9558 11.213L11.4499 9.44292C11.5098 9.24782 11.5248 9.06798 11.5248 8.90289C11.5248 8.33305 11.1805 7.98786 10.6265 7.98786C9.92271 7.98786 9.45858 8.49397 9.219 9.46901L8.26067 13.3201H6.58391L6.88488 12.1099C6.39198 12.9211 5.70741 13.4235 4.86301 13.4235C3.84484 13.4235 3.36574 12.8359 3.36574 11.9506Z"
										fill="white"
									></path>
								</svg>
								<svg
									className="w-[30px] h-[30px]"
									viewBox="0 0 17 18"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M15.1558 0.559692H1.51087C0.676432 0.559692 0 1.23742 0 2.07346V15.7446C0 16.5806 0.676432 17.2583 1.51087 17.2583H15.1558C15.9902 17.2583 16.6667 16.5806 16.6667 15.7446V2.07346C16.6667 1.23742 15.9902 0.559692 15.1558 0.559692Z"
										fill="#DC395F"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M6.58437 4.80783C6.58437 5.37806 6.12024 5.81314 5.56621 5.81314C5.01217 5.81314 4.54817 5.378 4.54817 4.80783C4.54817 4.23799 5.01217 3.80298 5.56621 3.80298C6.12024 3.80298 6.58437 4.23799 6.58437 4.80783ZM3.36574 11.9506C3.36574 11.726 3.39575 11.4506 3.45558 11.1956H3.45565L4.21913 8.07017H3.03638L3.39575 6.74185H6.24055L5.1175 11.2051C5.04263 11.4903 5.01268 11.7269 5.01268 11.8916C5.01268 12.1771 5.15292 12.2605 5.37219 12.3101C5.50572 12.34 6.56971 12.3191 7.14895 11.029L7.88658 8.07017H6.68872L7.0481 6.74185H9.60826L9.27896 8.24995C9.72805 7.40973 10.6265 6.61139 11.5098 6.61139C12.4531 6.61139 13.2317 7.28469 13.2317 8.57479C13.2317 8.90471 13.1867 9.2638 13.067 9.66874L12.5878 11.3933C12.543 11.5737 12.5129 11.7235 12.5129 11.8585C12.5129 12.1584 12.6327 12.3083 12.8573 12.3083C13.0819 12.3083 13.3664 12.1429 13.6958 11.2284L14.3546 11.4832C13.9652 12.8483 13.2616 13.4181 12.3782 13.4181C11.345 13.4181 10.8511 12.8035 10.8511 11.9631C10.8511 11.7233 10.8809 11.4681 10.9558 11.213L11.4499 9.44292C11.5098 9.24782 11.5248 9.06798 11.5248 8.90289C11.5248 8.33305 11.1805 7.98786 10.6265 7.98786C9.92271 7.98786 9.45858 8.49397 9.219 9.46901L8.26067 13.3201H6.58391L6.88488 12.1099C6.39198 12.9211 5.70741 13.4235 4.86301 13.4235C3.84484 13.4235 3.36574 12.8359 3.36574 11.9506Z"
										fill="white"
									></path>
								</svg>
							</div>
						</div>
					</div>
					<div className="text-[#53537b] w-[90%] mx-auto font-medium mt-4 bg-transparent">
						@2023 Mustafa. All rights reserved.
					</div>
				</div>
				<div className="lg:w-[70%] h-full">
					<div className="p-6 bg-white rounded-xl">
						<h3 className="font-bold text-[20px] mb-2">General Information</h3>
						<div className="flex flex-col gap-2">
							<div className="flex flex-col lg:flex-row gap-4">
								<div className="flex flex-col gap-2 w-full">
									<div className="flex flex-col gap-2">
										<h4 className="text-[#53537b] font-medium text-sm">
											About me
										</h4>
										<p className="text-black font-medium text-sm">
											Dedicated, passionate, and accomplished Full Stack
											Developer with 9+ years of progressive experience working
											as an Independent Contractor for Google and developing and
											growing my educational social network that helps others
											learn programming, web design, game development,
											networking.
										</p>
									</div>
									<div className="flex flex-col gap-2">
										<h4 className="text-[#53537b] font-medium text-sm">
											Education
										</h4>
										<p className="text-black font-medium text-sm">
											Thomas Jeff High School, Stanford University
										</p>
									</div>
									<div className="flex flex-col gap-2">
										<h4 className="text-[#53537b] font-medium text-sm">
											Work History
										</h4>
										<p className="text-black font-medium text-sm">
											Twitch, Google, Apple
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-2 w-full">
									<div className="flex flex-col gap-2">
										<h4 className="text-[#53537b] font-medium text-sm">
											Join Date
										</h4>
										<p className="text-black font-medium text-sm">12-09-2021</p>
									</div>
									<div className="flex flex-col gap-2">
										<h4 className="text-[#53537b] font-medium text-sm">
											Languages
										</h4>
										<p className="text-black font-medium text-sm">
											English, German, Italian, Spanish
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="p-6 bg-white rounded-xl mt-4">
						<h3 className="font-bold text-[20px] mb-2">Skills</h3>
						<div className="flex flex-col gap-2">
							<div className="flex flex-col lg:flex-row gap-4">
								<div className="flex flex-col gap-1 w-full">
									<div className="flex flex-col gap-2">
										<h4 className="text-[#53537b] font-medium text-sm">
											Software Skills
										</h4>
										<div className="flex flex-wrap gap-2 mt-2">
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												Next.Js
											</div>
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												React.Js
											</div>
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												Node.Js
											</div>
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												Express.Js
											</div>
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												MongoDB
											</div>
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												MySQL
											</div>
										</div>
									</div>
									<div className="flex flex-col gap-2">
										<h4 className="text-[#53537b] font-medium text-sm">
											Design Skills
										</h4>
										<div className="flex flex-wrap gap-2 mt-2">
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												Adobe Photoshop
											</div>
											<div className="w-fit px-4 p-2 bg-[#d2fae9] text-[#0D5C47] rounded-lg">
												Adobe Illustrator
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
