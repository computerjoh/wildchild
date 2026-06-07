export function buildStructuredData(
	siteUrl: URL,
	ogImageUrl: string,
	logoUrl: string,
) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": ["LocalBusiness", "Camp"],
				"@id": `${siteUrl.origin}/#camp`,
				name: "Wild Child Day Camps",
				description:
					"Colorado's adventure day camp for kids ages 6-15. Outdoor summer camps, marine science, climbing, creative writing, and enrichment in Westminster, CO since 1999. Award-winning director",
				url: `${siteUrl.origin}/`,
				telephone: "+1-970-389-5611",
				image: ogImageUrl,
				priceRange: "$450-$600",
				address: {
					"@type": "PostalAddress",
					streetAddress: "8300 W 94th Ave",
					addressLocality: "Westminster",
					addressRegion: "CO",
					postalCode: "80021",
					addressCountry: "US",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: 39.8364,
					longitude: -105.0639,
				},
				openingHoursSpecification: [
					{
						"@type": "OpeningHoursSpecification",
						validFrom: "2026-06-01",
						validThrough: "2026-08-15",
						dayOfWeek: [
							"https://schema.org/Monday",
							"https://schema.org/Tuesday",
							"https://schema.org/Wednesday",
							"https://schema.org/Thursday",
							"https://schema.org/Friday",
						],
						opens: "08:00",
						closes: "17:00",
					},
				],
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "5",
					reviewCount: "3",
					bestRating: "5",
					worstRating: "1",
				},
				review: [
					{
						"@type": "Review",
						author: { "@type": "Person", name: "Jaclyn U." },
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
						},
						reviewBody:
							"You are amazing at what you do and your passion and love for camps shows!!! My daughters cannot wait to be back in your camps!!!",
					},
					{
						"@type": "Review",
						author: { "@type": "Person", name: "Marcus T." },
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
						},
						reviewBody:
							"Worth every penny. The 1:6 ratio is real. My son knows every counselor by name. He came home from whitewater rafting week telling me he wants to be a river guide. That's Wild Child.",
					},
					{
						"@type": "Review",
						author: { "@type": "Person", name: "Jennifer K." },
						reviewRating: {
							"@type": "Rating",
							ratingValue: "5",
							bestRating: "5",
						},
						reviewBody:
							"We tried three camps before finding Wild Child. Nothing compares. The staff is exceptional, the programming is intentional, and my kids beg to go back every single year.",
					},
				],
				sameAs: [
					"https://facebook.com/wildchildprograms",
					"https://instagram.com/wildchildcolorado",
				],
			},
			{
				"@type": "Organization",
				"@id": `${siteUrl.origin}/#organization`,
				name: "Wild Child Day Camps",
				url: `${siteUrl.origin}/`,
				logo: logoUrl,
				sameAs: [
					"https://facebook.com/wildchildprograms",
					"https://instagram.com/wildchildcolorado",
				],
			},
		],
	};
}

export function buildFaqSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: [
			{
				"@type": "Question",
				name: "What ages does Wild Child Day Camps accept?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Wild Child Day Camps serves children ages 6-15. Most programs are open to ages 6-15, with REACH Climbing Club starting at age 7 and SPARK Creative Writing open to 2nd grade and up.",
				},
			},
			{
				"@type": "Question",
				name: "Where is Wild Child Day Camps located?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Wild Child Day Camps is based at Woodrow Wilson Academy, 8300 W 94th Ave, Westminster, CO 80021. Campers go on a new outdoor adventure destination every week throughout Colorado.",
				},
			},
			{
				"@type": "Question",
				name: "How much does Wild Child Day Camps cost?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Wild Child programs range from $450 to $600 per week depending on the program and session.",
				},
			},
			{
				"@type": "Question",
				name: "How do I register for Wild Child Day Camps?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Registration is open now at wildchildcamp.funjoin.app. Browse all available sessions and enroll directly. Spots are limited and popular weeks fill quickly.",
				},
			},
			{
				"@type": "Question",
				name: "What is the staff-to-camper ratio at Wild Child?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Wild Child maintains a 1:6 counselor-to-camper ratio — one staff member for every six campers — ensuring personal attention for every child every day.",
				},
			},
			{
				"@type": "Question",
				name: "Is Wild Child Day Camps licensed and insured?",
				acceptedAnswer: {
					"@type": "Answer",
					text: "Yes. Wild Child Day Camps is fully licensed and insured in Colorado, with 26 years of experience serving Front Range families since 1999.",
				},
			},
		],
	};
}
