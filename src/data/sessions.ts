// Manifest of camp weeks shown on the password-protected /slideshows page,
// organized by session. Each entry becomes one card with a session number,
// title, date range, an optional embedded Animoto slideshow, and a link to
// the week's Google Photos album.
//
// `slideshow` is the full Animoto player URL (copy verbatim from the embed
// code Animoto gives you — it includes an expiring auth token in the query
// string). Weeks without a slideshow yet omit the field and render a
// "coming soon" placeholder instead.

export interface Session {
	session: number;
	title: string;
	dates: string;
	photos: string;
	slideshow?: string;
}

export const sessions: Session[] = [
	{
		session: 1,
		title: "Mile High Safari",
		dates: "May 26 – 29",
		photos: "https://photos.app.goo.gl/LFQgE7GFr9rjdj1M8",
	},
	{
		session: 2,
		title: "FEAR Week",
		dates: "Jun 1 – 5",
		photos: "https://photos.app.goo.gl/fiEFWmPW4Yb4AtEx6",
		slideshow: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169725&f=7lcst0wnm4lH5PSrov0Yvw&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&ct=Want%20MORE%20Wild%20Child%3F&cu=http://www.wildchild.camp&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		session: 3,
		title: "Party Like a Rockstar",
		dates: "Jun 8 – 12",
		photos: "https://photos.app.goo.gl/4riAvSiHQQybxpTQA",
		slideshow: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169700&f=DJ7tvALoJFYIIorkhiYqdA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		session: 4,
		title: "Camp Castaway",
		dates: "Jun 12 – 19",
		photos: "https://photos.app.goo.gl/SBHK7bUv5GEsehfQ6",
		slideshow: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169661&f=6PCchE0QAfHwgeMidFaGuA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		session: 5,
		title: "Squatch Camp",
		dates: "Jun 22 – 26",
		photos: "https://photos.app.goo.gl/1xRina9SWyRm4U3x9",
		slideshow: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169638&f=EU1tIOmvJyNQypuSGzDFsA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		session: 6,
		title: "Wild West Quest",
		dates: "Jun 29 – Jul 3",
		photos: "https://photos.app.goo.gl/PAySqgpGQ6skDxzt8",
		slideshow: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169592&f=tGY8LK95BjwDh0pgR3ECvg&d=0&m=p&r=360p+720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		session: 7,
		title: "Best Week Ever",
		dates: "Jul 6 – 10",
		photos: "https://photos.app.goo.gl/XsJf9SEw2uyQTYH4A",
		slideshow: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784168933&f=mZhqL1EqQPRB0QgBP1IbbA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
];
