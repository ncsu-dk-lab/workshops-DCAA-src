import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black h-16 text-white">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-16 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">Trust AI @2022</div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#about">About</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#cfp">CFP</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#">Schedule</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#keynotes">Keynotes</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#organization">Organization</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row ">
          <div className="w-full" style={{
            "backgroundImage": 'url("https://trustlogworkshop.github.io/images/index.jpg")',
            "height": "50vh",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "center",
            "backgroundSize": "cover",
            "paddingTop": "22vh"
          }}>
            <div className="text-white text-4xl font-semibold text-center">
              The 1st Workshop on Trustworthy Learning on Graphs (TrustLOG)
            </div>
            <div className="text-white text-center mt-2">
              Colocated with the <span className="underline">31st ACM International Conference on Information and Knowledge Management</span>
            </div>
          </div>
        </div>

        <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
          <div className="mt-5 text-xl text-gray-600 text-justify">
            <div className="text-4xl">About</div>
            <div className="mt-5 leading-8">Learning on graphs is at the core of many domains, ranging from information retrieval, social network analysis to transportation and computational chemistry. Years of research in this area have developed a wealth of theories, algorithms, and open-source systems for a variety of learning tasks. State-of-the-art graph learning models have been widely deployed in various real-world applications, often delivering superior empirical performance in answering what/who questions. For example, what are the most relevant web pages with respect to a user query? Who can be grouped into the same community? What items should we recommend to best-fit user preferences? Despite the prosperous development of high-utility graph learning models, recent studies reveal that learning on graphs is not trustworthy in many aspects. For example, existing methods make decisions in a black-box manner, which hinders the end-users to understand and trust model decisions. Many commonly applied approaches are also found to be vulnerable to malicious attacks, biased against individuals from certain demographic groups, or insecure to information leakage. As such, a fundamental question largely remains nascent: how can we make learning algorithms on graphs trustworthy? To answer this question, it is crucial to propose a paradigm shift, from answering what/who to understanding how/why, e.g., how the ranking of webpages can be manipulated by the malicious link farms; why two seemingly different users are grouped into the same online community; how sensitive the recommendation results are due to the random noises or fake ratings.
            </div>
            <div className="mt-5">
              <ul className="list-disc pl-5">
                <li>Discovering graph-specific measurements and techniques for trustworthy learning;</li>
                <li>Understanding the implications of non-IID graph data on the classic trustworthy machine learning;</li>
                <li>Achieving trustworthy learning on graphs at scale;</li>
                <li>Accommodating the heterogeneity of graph data;</li>
                <li>Dealing with dynamically changing and/or temporal graphs.</li>
              </ul>
            </div>
            <div className="mt-5 leading-8">
            This one-day workshop aims to bring together researchers and practitioners from different backgrounds to answer these research questions and enhance the trustworthiness of learning on graphs. The workshop will consist of contributed talks, contributed posters, invited talks and discussion panels on a wide variety of methods and applications. Work-in-progress papers, demos, and visionary papers are also welcomed. We will also include invited papers for both oral presentation and poster presentation. This workshop intends to share visions of investigating new approaches and methods at the intersection of trustworthy learning on graphs and real-world applications.
            </div>
          </div>
        </div>

        <div style={{"background":"#f5f5f5"}}>
          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
            <div className="text-4xl">Call for papers</div>
            <div className="mt-5">
              <div>We invite submissions on a broad range of trustworthy learning on graphs. We welcome many types of papers, such as (but are not limited to):</div>
              <ul className="list-disc pl-5 mt-5">
                <li>Research papers</li>
                <li>Work-in-progress papers</li>
                <li>Demo papers</li>
                <li>Visionary papers/white papers</li>
                <li>Appraisal papers of existing methods or tools</li>
                <li>Evaluatory papers on assumptions, methods or tools</li>
                <li>Relevant work that will be or have been published</li>
              </ul>

              <div className="mt-5">Topics of interests include (but are not limited to):</div>
              <ul className="list-disc pl-5 mt-5">
                <li>Safety and robustness</li>
                <li>Interpretability, explainability and transparency</li>
                <li>Ethics</li>
                <li>Accountability</li>
                <li>Privacy preservation</li>
                <li>Causal analysis</li>
                <li>Environmental well-being</li>
                <li>Industry applications of trustworthy learning on graphs</li>
                <li>Datasets and benchmarks for trustworthy learning on graphs</li>
              </ul>       

              <div className="mt-5">Important Dates</div>
              <ul className="list-disc pl-5 mt-5">
                <li>Recommended paper submission deadline: September 2, 2022(full consideration)</li>
                <li>Dynamic submission window: September 3, 2022 ~ October 10, 2022(closed after pool is filled)</li>
                <li>Reviews period: September 11 - September 25, 2022</li>
                <li>Final notification: October 2, 2022</li>
                <li>Camera-ready submission: October 15, 2022</li>
                <li>Workshop day: October 21, 2022</li>
              </ul>
  
              <div className="text-2xl mt-5">Paper Submission</div>
              <div className="mt-5">Paper submissions are limited to a total of 5 pages for initial submission(up to 6 pages for final camera-ready submission), plus references or supplementary materials, and authors should only rely on the supplementary material to include minor details that do not fit in the 5-page main body. Manuscripts should be submitted in PDF format, using the ACM 2-column sigconf template. Paper reviews will be double-blind, and submissions that are not properly anonymized will be desk-rejected without review. Submitted papers will be assessed based on their novelty, technical quality, potential impact, and clarity of writing. For papers that rely heavily on empirical evaluations, the experimental methods and results should be clear, well executed, and repeatable. Authors are strongly encouraged to make data and code publicly available whenever possible. The accepted papers will be posted on the workshop website and will not be included in the CIKM proceedings. Special issues in flagship academic journals are under consideration to host the extended versions of best/selected papers in the workshop.</div>
              <div className="mt-3">Please submit to CMT via this link</div>

              <div className="text-2xl mt-5">ACM Policy Against Discrimination</div>
              <div className="mt-5">All authors and participants must adhere the the ACM discrimination policy. For full details, please visit this site.As a published ACM author, you and your co-authors are subject to all ACM Publications Policies , including ACM's new Publications Policy on Research Involving Human Participants and Subjects.</div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
          <div className="text-4xl">Agenda (Tentative)</div>
          <div className="mt-5">
            <div>Rows highlighted in green are LIVE whereas rows highlighted in yellow are PRE-RECORDED. The poster session is distributed across multiple ZOOM.</div> 
          </div>
          <div className="mt-5">
            <div className="flex border-b-2 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div> 
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">8:00am~8:15am</div>
              <div className="flex-1 text-center">Opening Session</div>
              <div className="w-100">Livestream (above)</div>
            </div>
            <div className="flex border-b-2 mt-3 pb-3">
              <div className="w-100">End</div>
            </div>
          </div>
        </div>

        <div style={{"background":"#f5f5f5"}}>
          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
            <div className="text-4xl">Keynote Speakers</div>
            <div className="flex mt-10">
              <div className="flex-1">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
              <div className="flex-1 ml-5">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex-1">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
              <div className="flex-1 ml-5">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex-1">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
              <div className="flex-1 ml-5">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
          <div className="text-4xl">Organization</div>
          <div className="mt-10">
            <div className="flex text-center">
              <div className="flex-1">
                <img className="w-1/2 m-auto" src="https://trustlogworkshop.github.io/images/hjr.png" />
                <div className="mt-3">Jing He</div>
                <div>Associate Professor</div>
                <div>University of Illinois at Urbana-Champaign</div>
              </div>
              <div className="flex-1">
                <img className="w-1/2 m-auto" src="https://trustlogworkshop.github.io/images/hjr.png" />
                <div className="mt-3">Jing He</div>
                <div>Associate Professor</div>
                <div>University of Illinois at Urbana-Champaign</div> 
              </div>
            </div>

            <div className="flex text-center mt-10">
              <div className="flex-1">
                <img className="w-1/2 m-auto" src="https://trustlogworkshop.github.io/images/hjr.png" />
                <div className="mt-3">Jing He</div>
                <div>Associate Professor</div>
                <div>University of Illinois at Urbana-Champaign</div>
              </div>
              <div className="flex-1">
                <img className="w-1/2 m-auto" src="https://trustlogworkshop.github.io/images/hjr.png" />
                <div className="mt-3">Jing He</div>
                <div>Associate Professor</div>
                <div>University of Illinois at Urbana-Champaign</div> 
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-10 text-sm text-gray-500" style={{background:"#f5f5f5"}}>
          <div>© 2022 jianwei.li All rights reserved</div>
          <div>(Last update: Sep 9, 2022.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
