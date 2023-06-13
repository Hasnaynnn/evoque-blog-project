import ArticlesBanner from '@/src/components/ArticlesBanner';
import Banner from '@/src/components/Banner';
import CustomHead from '@/src/components/Head';
import Navbar from '@/src/components/Navbar';
import requestConfig from '@/src/utils/config';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function BlogPage({ blogs }) {
    const router = useRouter();
    const { slug } = router.query;
    const category = slug?.[0];
    const subcategory = slug?.[1];

    return (
        <>
            <CustomHead
                title="JBLOG | food blogs"
                description="see variety of blogs here"
                keyword="science blogs, food blogs"
            />
            <Navbar />
            <Banner blogs={blogs} />
            <ArticlesBanner blogs={blogs} />
        </>
    )
}
export async function getServerSideProps({params}) {
    console.log(params, params.slug)

    const category = params.slug?.[0];
    const subcategory = params.slug?.[1];

    console.log(category, subcategory)
    let url = process.env.NEXT_PUBLIC_BASE_URL + `blogs?category=${category}&subCategory=${subcategory}`
    console.log(url)
    let res = await axios.get(url, requestConfig)
    return {
        props: res.data
    }

}
