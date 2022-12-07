import Banner from '@/components/about/Banner'
import BannerThin from '@/components/about/BannerThin'
import Footer from '@/components/about/Footer'
import SectionBlock from '@/components/about/SectionBlock'
import SectionCard from '@/components/about/SectionCard'
import SectionHero from '@/components/about/SectionHero'
import SectionMore from '@/components/about/SectionMore'
import SectionValues from '@/components/about/SectionValues'
import ToTop from '@/components/common/ToTop'
import Header from '@/layout/header'
import Head from 'next/head'

const TITLE = 'About | Room Service'

export default function About() {
	return (
		<>
			<Head>
				<title>{TITLE}</title>
				<meta name='title' content={TITLE}></meta>
				<meta property='og:title' content={TITLE}></meta>
				<meta name='twitter:title' content={TITLE} />
			</Head>

			<ToTop />

			<Header />

			<SectionHero />

			<Banner />

			<SectionBlock />

			<BannerThin />

			<SectionMore />

			<BannerThin />

			<SectionCard />

			<BannerThin />

			<SectionValues />

			<Footer />
		</>
	)
}
