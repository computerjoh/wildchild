// Manifest of embedded slideshow videos shown on the password-protected
// /slideshows page. Each entry becomes one <iframe> in the gallery.
//
// `src` is the full Animoto player URL (copy verbatim from the embed code
// Animoto gives you — it includes an expiring auth token in the query string).

export interface Slideshow {
	id: string;
	title: string;
	src: string;
}

export const slideshows: Slideshow[] = [
	{
		id: "vp1mZhqL",
		title: "Best Week Ever",
		src: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784168933&f=mZhqL1EqQPRB0QgBP1IbbA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		id: "vp1tGY8L",
		title: "Wild West Quest 2026",
		src: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169592&f=tGY8LK95BjwDh0pgR3ECvg&d=0&m=p&r=360p+720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		id: "vp1EU1tI",
		title: "Squatch Week",
		src: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169638&f=EU1tIOmvJyNQypuSGzDFsA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		id: "vp16PCch",
		title: "Camp Castaway",
		src: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169661&f=6PCchE0QAfHwgeMidFaGuA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		id: "vp1DJ7tv",
		title: "Party Like a Rockstar",
		src: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169700&f=DJ7tvALoJFYIIorkhiYqdA&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
	{
		id: "vp17lcst",
		title: "Fear Week",
		src: "https://player.animoto.com/play.html?w=swf/production/vp1&e=1784169725&f=7lcst0wnm4lH5PSrov0Yvw&d=0&m=p&r=720p+1080p&volume=100&start_res=1080p&i=m&ct=Want%20MORE%20Wild%20Child%3F&cu=http://www.wildchild.camp&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=",
	},
];
