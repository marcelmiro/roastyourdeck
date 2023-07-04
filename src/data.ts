interface Solution {
	title: string
	points: Array<{
		title: string
		description: string
		icon: string // HTML as string
	}>
}

export const solution: Solution[] = [
	{
		title: 'For Lenders:',
		points: [
			{
				title: 'Borrower Portal',
				description: 'Easily manage loan positions.',
				icon: '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z"></path></svg>',
			},
			{
				title: 'Real-Time Transactions',
				description: 'Assess risks and collaborate with others.',
				icon: '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"></path></svg>',
			},
		],
	},
	{
		title: 'For Investors:',
		points: [
			{
				title: 'Distributed risk',
				description: 'Share risk with other private credit providers.',
				icon: '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.9272 9.3688C21.4207 9.0872 21.775 8.634 21.9231 8.0928C22.0756 7.5516 21.9993 6.984 21.7122 6.5C21.4252 6.0116 20.9631 5.664 20.4114 5.5188C19.8596 5.3736 19.281 5.4484 18.7875 5.73C18.5902 5.8444 18.4152 5.9808 18.2717 6.1436L14.0372 3.7456C14.1045 3.5388 14.1403 3.3232 14.1403 3.0988C14.1403 1.9416 13.1804 1 12.0007 1C10.8164 1 9.85648 1.9416 9.85648 3.0988C9.85648 3.3232 9.89237 3.5388 9.96414 3.7456L5.72514 6.1392C5.58608 5.9808 5.41562 5.84 5.21377 5.73C4.19102 5.1492 2.87671 5.4924 2.28908 6.5C2.00199 6.984 1.92574 7.5516 2.07377 8.0928C2.22179 8.634 2.57617 9.0872 3.06959 9.3688C3.26697 9.4788 3.47779 9.558 3.69311 9.602V14.398C3.47779 14.4376 3.26697 14.5168 3.06959 14.6268C2.04685 15.2076 1.69697 16.4924 2.28908 17.5C2.68382 18.1732 3.40602 18.5472 4.14617 18.5472C4.50951 18.5472 4.87734 18.4592 5.21377 18.2656C5.41114 18.1556 5.5816 18.0192 5.72962 17.8564L9.96414 20.25C9.89237 20.4524 9.85648 20.6724 9.85648 20.8968C9.85648 22.054 10.8164 23 12.0007 23C13.1804 23 14.1403 22.054 14.1403 20.8968C14.1403 20.6724 14.1045 20.4524 14.0372 20.25L18.2672 17.852C18.4107 18.0148 18.5857 18.1512 18.7875 18.2656C19.115 18.4548 19.4828 18.5472 19.8507 18.5472C20.0391 18.5472 20.2275 18.5252 20.4114 18.4768C20.9631 18.3316 21.4252 17.984 21.7122 17.5C21.9993 17.0116 22.0756 16.444 21.9231 15.9028C21.775 15.3616 21.4207 14.9084 20.9272 14.6268C20.7299 14.5168 20.519 14.4376 20.3037 14.3936V9.602C20.519 9.558 20.7299 9.4788 20.9272 9.3688ZM13.5841 4.5068L17.8231 6.9048C17.6841 7.314 17.6796 7.7628 17.8186 8.1896L14.2076 10.24C13.777 9.7164 13.158 9.3512 12.4492 9.2456V5.1536C12.8978 5.0612 13.2925 4.828 13.5841 4.5068ZM10.4127 4.5068C10.7043 4.828 11.1035 5.0612 11.5521 5.1536V9.2456C10.8433 9.3512 10.2243 9.7164 9.7892 10.24L6.18268 8.194C6.24997 7.9828 6.28585 7.7672 6.28585 7.5516C6.28585 7.3316 6.24997 7.1116 6.1782 6.9004L10.4127 4.5068ZM4.69791 14.42C4.66202 14.4112 4.62614 14.4024 4.59025 14.398V9.5976C4.62614 9.5932 4.66202 9.5844 4.69791 9.5756C5.10162 9.47 5.46048 9.2544 5.72962 8.9552L9.34511 11.0012C9.21951 11.3092 9.15223 11.648 9.15223 12C9.15223 12.352 9.21951 12.6864 9.34063 12.9944L5.72962 15.0404C5.46048 14.7412 5.10162 14.5256 4.69791 14.42ZM10.4172 19.4888L6.17371 17.0908C6.19165 17.0556 6.20063 17.0248 6.2096 16.9896C6.31725 16.5936 6.30828 16.1888 6.1782 15.806L9.79369 13.76C10.2243 14.2792 10.8478 14.6444 11.5521 14.75V18.8464C11.1035 18.9388 10.7088 19.1676 10.4172 19.4888ZM13.5841 19.4932C13.2925 19.1676 12.8978 18.9388 12.4492 18.8464V14.75C13.158 14.6444 13.777 14.2792 14.2076 13.7556L17.8186 15.806C17.7513 16.0128 17.7155 16.2284 17.7155 16.444C17.7155 16.664 17.7513 16.884 17.8231 17.0908L13.5841 19.4932ZM18.2672 15.0404L14.6562 12.99C14.7773 12.682 14.8446 12.3476 14.8446 12C14.8446 11.648 14.7773 11.3136 14.6517 11.0056L18.2717 8.9552C18.5722 9.2896 18.9759 9.5096 19.4066 9.602V14.3936C18.9759 14.486 18.5722 14.706 18.2672 15.0404Z"/></svg>',
			},
			{
				title: 'Enhanced liquidity',
				description:
					'Unlock new opportunities in the secondary market.',
				icon: '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18.1034 11.103L11.9955 2.25684C11.9407 2.17769 11.8671 2.11292 11.7812 2.06816C11.6953 2.0234 11.5996 2 11.5024 2C11.4052 2 11.3095 2.0234 11.2236 2.06816C11.1376 2.11292 11.0641 2.17769 11.0093 2.25684L4.899 11.103C4.886 11.1212 4.87405 11.1401 4.86318 11.1596C4.26157 12.2867 3.96535 13.5479 4.00323 14.8211C4.0411 16.0943 4.41178 17.3362 5.07936 18.4266C5.74694 19.517 6.68879 20.419 7.81367 21.045C8.93855 21.671 10.2083 22 11.5 22C12.7917 22 14.0614 21.671 15.1863 21.045C16.3112 20.419 17.2531 19.517 17.9206 18.4266C18.5882 17.3362 18.9589 16.0943 18.9968 14.8211C19.0346 13.5479 18.7384 12.2867 18.1368 11.1596C18.1267 11.1401 18.1156 11.1213 18.1034 11.103Z"/></svg>',
			},
		],
	},
]

interface Package {
	title: string
	description: string
	price: string // Without dollar symbol
	priceIndicator?: string
	features: Array<string | { text: string; disabled?: boolean }>
	purchaseUrl: string
}

const fireEmoji = '%F0%9F%94%A5'

export const packages: Package[] = [
	{
		title: 'Quick roast',
		description:
			'Improve your pitch deck for the price of a cup of coffee ☕.',
		price: '4.99',
		priceIndicator: 'per feedback',
		features: ['Pay-as-you-go', '48 hour delivery'],
		purchaseUrl: `https://airtable.com/shrLivExT3iaNxxYq?prefill_Roast%20package=Quick%20Roast%20${fireEmoji}`,
	},
	{
		title: 'Half roast',
		description:
			'Get a complete break down of your entire deck and receive unlimited feedback.',
		price: '299',
		priceIndicator: 'per week',
		features: ['Unlimited reviews', '24 hour delivery'],
		purchaseUrl: `https://airtable.com/shrLivExT3iaNxxYq?prefill_Roast%20package=Half%20Roast%20${fireEmoji}${fireEmoji}`,
	},
	{
		title: 'Full roast',
		description:
			"For those who want the perfect pitch deck - Don't worry, leave it in our hands.",
		price: '1,999',
		priceIndicator: 'one time',
		features: [
			'Complete redesign by our experts',
			'Unlimited changes for a month',
		],
		purchaseUrl: `https://airtable.com/shrLivExT3iaNxxYq?prefill_Roast%20package=Full%20Roast%20${fireEmoji}${fireEmoji}${fireEmoji}`,
	},
]
