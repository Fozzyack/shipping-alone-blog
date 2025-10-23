import BlogLayout from "~/components/BlogLayout";
import { articles } from "~/constants/blog-exerpts";

const TheInternExperienceBlogPost = () => {
    const article = articles.find(
        (article) => article.id == "the-intern-experience-1",
    );
    return (
        <BlogLayout article={article}>
            <h1>Header 1</h1>
            <p>
                some text here as;ldkfjas;dlfks;adlf jsa;dlfj sda;lfjsd
                a;lfkjsda ;flkjsa;f lksdj ;sladkf ;dsaljf;asdlfj
                ;sdaljsd;lfk;sdafjsd asdlkfj;asdlf;asdlfj;asdlfj;asdlfkj asd;fj
                ;asdlfj asdflkasdjflkasjflkasdjflkdsjfoafj;sjmv;lxckj;
                ;saldkjsa;fldj;salkfj ;saldfkjs;aldfj ;saldfj;sadlf
                asdklfjasdlkfjasldjfsalkfjasdlf ;sdlf asdfkjasdlfkjsdalfjdsalkfj
                ;sadlfj ;sadlfj a;slfja asdfsadlkfjasdl fjsdlkfj sdalfjsdlf
                a;slfjsa;dflkjsadlkfjsadlfjsadf sdfj sadkfj sldakjfdslak
                fjsdlakfj sadlkfj sadlkjf sdlakfj sdlkjf sdlkjf
            </p>
            <h2>Header 2</h2>
            <p>
                Some more text {" "}
                <a href="https://google.com"> Sample Link </a>
            </p>
            <h3> Header 3 </h3>
        </BlogLayout>
    );
};

export default TheInternExperienceBlogPost;
