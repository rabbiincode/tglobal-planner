export const StickyNote1 = ({ size = 24, color = '#000000' }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 24 24`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_4418_9711)">
				<path
					d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
					stroke={color}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
					stroke={color}
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_4418_9711">
					<rect
						width="24"
						height="24"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};
