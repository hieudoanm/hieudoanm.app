# Technology

- [Technology](#technology)
  - [Abbreviation](#abbreviation)
  - [Techstack](#techstack)

## Abbreviation

- `API`: Application Programming Interface
  - `SOAP`: Simple Object Access Protocol
  - `REST`: Representational State Transfer
  - [`GraphQL`](https://graphql.org/) : Graph Query Language
  - `RPC`: Remote Procedure Call
  - `EDA`: Event-Driven Architecture (e.g. Message Broker, WebHook)
  - WebSocket
- Azure:
  - AKS: Azure Kubernetes Service
- `AWS`: Amazon Web Services
  1. `EC2`: Elastic Compute Cloud
  2. `EBS`: Elastic Block Store
  3. `ECR`: Elastic Container Registry
  4. `EFS`: Elastic File System
  5. `EKS`: Elastic Kubernetes Service
  6. `ELB`: Elastic Load Balancing
  7. `RDS`: Relational Database Service
  8. `S3`: Simple Storage Service
  9. `VPC`: Virtual Private Cloud
- `DevOps`: Development & DevOps
  1. `CI/CD`: Continous Integration / Continous Delivery
  2. `SaaS`: Software as a Service
  3. `PaaS`: Platform as a Service
  4. `IaaS`: Infrastructure as a Service
- Web
  1. `HTML`: HyperText Markup Language
  2. `CSS`: Cascading Style Sheets
- `CLI`: Command-line Interface
- `DB`: Database
- `e2e`: End to End
- `DNS`: Domain Name System
- `IDE`: Integrated Development Environment
- `IP`: Internet Protocol
- `ORM`: Object Relational Mapping
- `SQL`: Structure Query Language

## Techstack

| Runtime          | Supersector  | Sector               | Subsector              | Name                                           | Developer              |
| ---------------- | ------------ | -------------------- | ---------------------- | ---------------------------------------------- | ---------------------- |
|                  | OS           | Kernel               |                        | [Linux](https://www.kernel.org/)               |                        |
|                  | Full-stack   | Language             | Markup                 | [Markdown][markdown]                           |                        |
|                  | Full-stack   | Language             | Markup                 | [SVG][svg]                                     |                        |
|                  | Full-stack   | Language             | Programming            | C                                              |                        |
|                  | Full-stack   | Language             | Programming            | [C++](https://isocpp.org/)                     |                        |
|                  | Full-stack   | Language             | Programming            | [Python](https://www.python.org)               |                        |
|                  | Full-stack   | Language             | Programming            | [Shell Script][shell-script]                   |                        |
| [Node.js][node]  | Full-stack   | Language             | Programming            | [JavaScript][javascript]                       |                        |
| [Java][java]     | Full-stack   | Package Manager      |                        | [Gradle](https://gradle.org/)                  |                        |
| [Java][java]     | Full-stack   | Package Manager      |                        | [JFrog](https://jfrog.com/)                    |                        |
| [Java][java]     | Full-stack   | Package Manager      |                        | [Maven](https://maven.apache.org/)             |                        |
| [Node.js][node]  | Full-stack   | Package Manager      |                        | [pnpm](https://pnpm.io/)                       |                        |
| [Python][python] | Full-stack   | Package Manager      |                        | [anaconda](https://www.anaconda.com/)          |                        |
| [Python][python] | Full-stack   | Package Manager      |                        | [pip](https://pypi.org/project/pip/)           |                        |
| [Python][python] | Full-stack   | Package Manager      |                        | [pipenv][pipenv]                               |                        |
| [Python][python] | Full-stack   | Package Manager      |                        | [virtualenv][virtualenv]                       |                        |
|                  | Full-stack   | Package Manager      | Management             | [Renovate](https://www.mend.io/renovate/)      |                        |
| [Node.js][node]  | Full-stack   | Logging              |                        | [npmlog][node-npmlog]                          |                        |
| [Node.js][node]  | Full-stack   | Logging              |                        | [pino](https://getpino.io)                     |                        |
| [Node.js][node]  | Full-stack   | Logging              |                        | [winston][node-winston]                        |                        |
|                  | Full-stack   | Linting & Formatter  | Linting                | [sonarlint][sonarlint]                         |                        |
| [Java][java]     | Full-stack   | Linting & Formatter  | Linting                | [checkstyle](https://checkstyle.org/)          |                        |
| [Java][java]     | Full-stack   | Linting & Formatter  | Linting                | [spotbugs][spotbugs]                           |                        |
| [Node.js][node]  | Full-stack   | Build                |                        | [webpack](https://webpack.js.org/)             |                        |
| [Node.js][node]  | Full-stack   | Testing              | Unit                   | [jasmine](https://jasmine.github.io/)          |                        |
| [Node.js][node]  | Full-stack   | Testing              | Unit                   | [mocha](https://mochajs.org/)                  |                        |
| [Node.js][node]  | Full-stack   | Git Hooks            |                        | [husky][node-husky]                            |                        |
| [Golang][golang] | Full-stack   | CLI                  |                        | [cobra](https://cobra.dev/)                    |                        |
| [Node.js][node]  | Full-stack   | CLI                  |                        | [vite](https://vitejs.dev/)                    |                        |
| [Node.js][node]  | Full-stack   | Documentation        | Markdown to HTML       | [docsify](https://docsify.js.org/#/)           |                        |
| [Node.js][node]  | Full-stack   | Framework            | GraphQL                | [Apollo][apollo]                               |                        |
| [Node.js][node]  | Front-end    | Styling              | CSS Extension          | [PostCSS](https://postcss.org/)                |                        |
| [Node.js][node]  | Front-end    | Styling              | CSS Extension          | [SASS](https://sass-lang.com/)                 |                        |
| [Node.js][node]  | Front-end    | Styling              | Documentation          | [storybook](https://storybook.js.org/)         |                        |
| [Node.js][node]  | Front-end    | Testing              | e2e                    | [cypress](https://www.cypress.io/)             |                        |
| [Node.js][node]  | Front-end    | Testing              | e2e                    | [karma][node-karma]                            | [Alphabet][alphabet]   |
| [Node.js][node]  | Front-end    | Chart                |                        | [Charts.js](https://www.chartjs.org/)          |                        |
| [Node.js][node]  | Front-end    | Chart                |                        | [Chartist.js][node-chartist]                   |                        |
| [Node.js][node]  | Front-end    | Chart                |                        | [D3.js](https://d3js.org/)                     |                        |
| [Node.js][node]  | Front-end    | Chart                |                        | [Google Chart][node-google-chart]              | [Alphabet][alphabet]   |
| [Node.js][node]  | Front-end    | Chart                |                        | [Highcharts][node-highcharts]                  |                        |
| [Node.js][node]  | Front-end    | Chart                | React                  | [Recharts](https://recharts.org/)              |                        |
| [Node.js][node]  | Front-end    | State Management     |                        | [Redux][node-redux]                            |                        |
| [Node.js][node]  | Front-end    | State Management     |                        | [Redux Saga][node-redux-saga]                  |                        |
| [Node.js][node]  | Front-end    | State Management     |                        | [Redux Thunk][node-redux-thunk]                |                        |
| [Golang][golang] | Back-end     | Framework            |                        | [Gin](https://gin-gonic.com/)                  |                        |
| [Java][java]     | Back-end     | Framework            |                        | [Spring][spring]                               |                        |
| [Java][java]     | Back-end     | Framework            |                        | [Spring Boot][spring-boot]                     |                        |
| [Node.js][node]  | Back-end     | Framework            |                        | [Express.js](https://expressjs.com/)           |                        |
| [Node.js][node]  | Back-end     | Framework            |                        | [Fastify](https://www.fastify.io/)             |                        |
| [Node.js][node]  | Back-end     | Framework            |                        | [Nest.js](https://nestjs.com/)                 |                        |
| [Node.js][node]  | Back-end     | Framework            | WebSocket              | [Socket.io](https://socket.io/)                |                        |
| [Python][python] | Back-end     | Framework            |                        | [Django][django]                               |                        |
| [Python][python] | Back-end     | Framework            |                        | [FastAPI][fast-api]                            |                        |
| [Python][python] | Back-end     | Framework            |                        | [Flask][flask]                                 |                        |
| [Node.js][node]  | Back-end     | Security             | Authentication         | [jsonwebtoken](https://jwt.io/)                |                        |
| [Node.js][node]  | Back-end     | Security             | Authentication         | [passport][node-passport]                      |                        |
| [Node.js][node]  | Back-end     | Security             | Protection             | [cors][node-cors]                              |                        |
| [Node.js][node]  | Back-end     | Security             | Protection             | [helmet](https://helmetjs.github.io/)          |                        |
| [Node.js][node]  | Back-end     | Swagger              | Documentation          | [tsoa][node-tsoa]                              |                        |
| [Node.js][node]  | Back-end     | ORM                  | Library                | [Mongoose](https://mongoosejs.com/)            |                        |
| [Node.js][node]  | Back-end     | ORM                  | Library                | [Prisma](https://www.prisma.io/)               |                        |
| [Node.js][node]  | Back-end     | ORM                  | Library                | [Sequelize](https://sequelize.org/)            |                        |
| [Node.js][node]  | Back-end     | ORM                  | Library                | [TypeORM](https://typeorm.io/)                 |                        |
|                  | Back-end     | ORM                  | Visualizer             | [Prismaliser](https://prismaliser.app/)        |                        |
|                  | Back-end     | Message Broker       |                        | [RabbitMQ](https://www.rabbitmq.com/)          |                        |
|                  | Back-end     | API Development      |                        | [Insomnia](https://insomnia.rest/)             |                        |
|                  | Back-end     | API Development      |                        | [Postman](https://www.postman.com/)            |                        |
|                  | Back-end     | Blockchain           |                        | [Solana](https://solana.com/)                  |                        |
|                  | Back-end     | Blockchain           |                        | [Hedera](https://hedera.com/)                  |                        |
|                  | Back-end     | Blockchain           |                        | [Ethereum](https://ethereum.org/)              |                        |
|                  | Data Science | Datasets             |                        | [huggingface](https://huggingface.co/)         |                        |
|                  | Data Science | Datasets             |                        | [kaggle](https://www.kaggle.com/)              |                        |
|                  | Data Science | Datasets             |                        | [statista](https://www.statista.com/)          |                        |
|                  | Data Science | Language             | Programming            | [R](https://www.r-project.org/)                |                        |
| [Python][python] | Data Science | Library              | Data Collection        | [BeautifulSoup][beautiful-soup]                |                        |
| [Python][python] | Data Science | Library              | Data Collection        | [scrapy](https://scrapy.org/)                  |                        |
| [Python][python] | Data Science | Library              | Data Exploration       | [pandas](https://pandas.pydata.org/)           |                        |
| [Python][python] | Data Science | Library              | Data Exploration       | [numpy](https://numpy.org/)                    |                        |
| [Python][python] | Data Science | Library              | Data Visualization     | [matplotlib](https://matplotlib.org/)          |                        |
| [Python][python] | Data Science | Library              | Machine Learning       | [keras](https://keras.io/)                     |                        |
| [Python][python] | Data Science | Library              | Machine Learning       | [pytorch](https://pytorch.org/)                |                        |
| [Python][python] | Data Science | Library              | Machine Learning       | [scikit-learn][scikit-learn]                   |                        |
| [Python][python] | Data Science | Library              | Machine Learning       | [scipy](https://scipy.org/)                    |                        |
|                  | Data Science | Tool                 |                        | [DeepAI](https://deepai.org/)                  |                        |
|                  | Data Science | Tool                 |                        | [QuillBot](https://quillbot.com/)              |                        |
|                  | Data Science | Tool                 |                        | [JenniAI](https://jenni.ai/)                   |                        |
|                  | Data Science | Tool                 |                        | [Woebot Health](https://woebothealth.com/)     |                        |
|                  | Game         | Engine               |                        | [Photon Engine](https://www.photonengine.com/) |                        |
|                  | Game         | Engine               |                        | [Unity](https://unity.com/)                    |                        |
|                  | Game         | Engine               |                        | [Unreal Engine](https://www.unrealengine.com/) |                        |
|                  | DevOps       | Server               |                        | [nginx](https://www.nginx.com/)                |                        |
|                  | DevOps       | Containerization     |                        | [Docker](https://www.docker.com/)              |                        |
|                  | DevOps       | Containerization     |                        | [Kubernetes](https://kubernetes.io/)           |                        |
|                  | DevOps       | SaaS                 | Authentication         | [Auth0](https://auth0.com/)                    |                        |
|                  | DevOps       | SaaS                 | Authentication         | [Keycloak](https://www.keycloak.org/)          |                        |
|                  | DevOps       | SaaS                 | CI/CD                  | [CircleCI](https://circleci.com/)              |                        |
|                  | DevOps       | SaaS                 | CI/CD                  | [GitHub Actions][github-actions]               |                        |
|                  | DevOps       | SaaS                 | CI/CD                  | [GitLab CI][gitlab-ci]                         |                        |
|                  | DevOps       | SaaS                 | CI/CD                  | [Jenkins](https://www.jenkins.io/)             |                        |
|                  | DevOps       | SaaS                 | CI/CD                  | [Travis](https://www.travis-ci.com/)           |                        |
|                  | DevOps       | SaaS                 | CI/CD                  | [Harness](https://www.harness.io)              |                        |
|                  | DevOps       | SaaS                 | [Git][git]             | [GitHub](https://github.com/)                  |                        |
|                  | DevOps       | SaaS                 | [Git][git]             | [GitLab](https://about.gitlab.com/)            |                        |
|                  | DevOps       | SaaS                 | Diagrams               | [Diagrams](https://www.diagrams.net/)          |                        |
|                  | DevOps       | SaaS                 | Diagrams               | [Sequence Diagram][sequence-diagram]           |                        |
|                  | DevOps       | SaaS                 | Logging                | [Grafana](https://grafana.com/)                |                        |
|                  | DevOps       | SaaS                 | Logging                | [Splunk](https://www.splunk.com/)              |                        |
|                  | DevOps       | PaaS                 |                        | [heroku](https://www.heroku.com/)              |                        |
|                  | DevOps       | PaaS                 |                        | [render](https://render.com/)                  |                        |
|                  | DevOps       | IaaS - AWS           | Networking             | [VPC](https://aws.amazon.com/vpc/)             | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Networking             | [Route 53][aws-route53]                        | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Networking             | [ELB][aws-elb]                                 | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Containerization       | [ECR](https://aws.amazon.com/ecr/)             | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Containerization       | [EKS](https://aws.amazon.com/eks/)             | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Serverless             | [Lambda][lambda]                               | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Compute                | [EC2](https://aws.amazon.com/ec2/)             | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | PaaS                   | [Elastic Beanstalk][elasticbeanstalk]          | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | DB - Key-Value         | [ElasticCache][aws-elasticache]                | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | DB - Relational        | [RDS](https://aws.amazon.com/rds/)             | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | DB - Search Engine     | [OpenSearch Service][aws-opensearch]           | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Files Storage          | [S3](https://aws.amazon.com/s3/)               | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Files Storage          | [EBS](https://aws.amazon.com/ebs/)             | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Files Storage          | [EFS](https://aws.amazon.com/efs/)             | [Amazon][amazon]       |
|                  | DevOps       | IaaS - AWS           | Secrets Manager        | System Manager - Parameter Store               | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Networking             | Virtual Network                                | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Networking             | DNS                                            | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Networking             | Firewall                                       | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Networking             | Load Balancer                                  | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | CI/CD                  | Pipelines                                      | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | CI/CD                  | Cloud Build Pipelines                          | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Containerization       | Container Registry                             | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Containerization       | AKS                                            | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Serverless             | Functions                                      | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Compute                | Virtual Machines (Linux & Windows)             | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | PaaS                   | App Service                                    | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Files Storage          | Files                                          | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Files Storage          | Cloud Storage                                  | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | DB - Key-Value         | Cache for Redis                                | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | DB - Relational        | Database for MySQL                             | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | DB - Relational        | Database for PostgreSQL                        | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | DB - Relational        | SQL Database                                   | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | DB - Multi Model       | Cosmos DB                                      | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Message Broker         | Service Bus                                    | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Azure         | Secrets Manager        | Key Vault                                      | [Microsoft][microsoft] |
|                  | DevOps       | IaaS - Google Cloud  | Networking             | VPC                                            | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Networking             | Cloud DNS                                      | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Networking             | Cloud Load Balancing                           | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Containerization       | Container Registry                             | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Containerization       | Kubernetes Engine                              | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Serverless             | Cloud Functions                                | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Compute                | Compute Engine                                 | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | PaaS                   | Google App Engine                              | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Files Storage          | Spaces Object Storage                          | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | Files Storage          | Volumes Block Storage                          | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Google Cloud  | DB - Document Oriented | Firestore                                      | [Alphabet][alphabet]   |
|                  | DevOps       | IaaS - Digital Ocean | Networking             | VPC                                            |                        |
|                  | DevOps       | IaaS - Digital Ocean | Networking             | [Reserved IPs][do-reserved-ips]                |                        |
|                  | DevOps       | IaaS - Digital Ocean | Networking             | DNS                                            |                        |
|                  | DevOps       | IaaS - Digital Ocean | Networking             | [Firewalls][do-firewalls]                      |                        |
|                  | DevOps       | IaaS - Digital Ocean | Networking             | [Load Balancers][do-load-balancers]            |                        |
|                  | DevOps       | IaaS - Digital Ocean | PaaS                   | App Platform                                   |                        |
|                  | DevOps       | IaaS - Digital Ocean | DB - Key-Value         | Redis                                          |                        |
|                  | DevOps       | IaaS - Digital Ocean | DB - Document Oriented | MongoDB                                        |                        |
|                  | DevOps       | IaaS - Digital Ocean | DB - Relational        | PostgreSQL                                     |                        |
|                  | DevOps       | IaaS - Digital Ocean | DB - Relational        | MySQL                                          |                        |
|                  | DevOps       | IaaS - IBM           |                        |                                                | [IBM][ibm]             |
|                  | Hardware     | Framework            |                        | [Qt](https://www.qt.io/)                       |                        |
|                  | Hardware     | Electronics          |                        | [Arduino](https://www.arduino.cc/)             |                        |
|                  | Hardware     | Electronics          |                        | [Raspberry PI][raspberry-pi]                   |                        |
|                  | Design       | Tools                |                        | [Figma](https://www.figma.com)                 | [Adobe][adobe]         |
|                  | Design       | Tools                |                        | [Photoshop][photoshop]                         | [Adobe][adobe]         |
|                  | Design       | Tools                |                        | [Illustrator][illustrator]                     | [Adobe][adobe]         |
|                  | Design       | Tools                |                        | [Coolors](https://coolors.co/)                 |                        |
|                  | Design       | Resources            |                        | [Mobbin][mobbin]                               |                        |
|                  | Design       | Inspiration          |                        | [Monument Valley][monumentvalleygame]          |                        |
|                  | Music        | Instrument           |                        | Piano                                          |                        |
|                  | Music        | Instrument           |                        | Violon                                         |                        |

<!-- Companies -->

[alphabet]: http://alphabet.com/
[amazon]: https://www.amazon.com/
[ibm]: https://www.ibm.com/
[microsoft]: https://www.microsoft.com/

<!-- AWS -->

[aws-elasticache]: https://aws.amazon.com/elasticache/
[aws-elb]: https://aws.amazon.com/elasticloadbalancing/
[aws-opensearch]: https://aws.amazon.com/opensearch-service/
[aws-route53]: https://aws.amazon.com/route53/
[elasticbeanstalk]: https://aws.amazon.com/elasticbeanstalk/
[lambda]: https://aws.amazon.com/lambda/

<!-- CI/CD -->

[github-actions]: https://github.com/features/actions
[gitlab-ci]: https://docs.gitlab.com/ee/ci/

<!-- Digital Ocean -->

[do-firewalls]: https://docs.digitalocean.com/products/networking/firewalls/
[do-load-balancers]: https://docs.digitalocean.com/products/networking/load-balancers/
[do-reserved-ips]: https://docs.digitalocean.com/products/networking/reserved-ips/

<!-- GraphQL -->

[apollo]: https://www.apollographql.com/

<!-- Hardware -->

[raspberry-pi]: https://www.raspberrypi.com/

<!-- Java -->

[spring]: https://spring.io/
[spring-boot]: https://spring.io/projects/spring-boot

<!-- Languages -->

[golang]: https://go.dev/
[java]: https://www.java.com/
[javascript]: https://www.javascript.com/
[markdown]: https://daringfireball.net/projects/markdown/
[node]: https://nodejs.org/en/
[python]: https://www.python.org/
[shell-script]: https://www.shellscript.sh/
[svg]: https://www.w3.org/Graphics/SVG/

<!-- Node.js -->

[node-chartist]: https://gionkunz.github.io/chartist-js/
[node-cors]: https://github.com/expressjs/cors
[node-google-chart]: https://developers.google.com/chart
[node-highcharts]: https://www.highcharts.com/
[node-husky]: https://typicode.github.io/husky/#/
[node-karma]: https://karma-runner.github.io
[node-npmlog]: https://github.com/npm/npmlog
[node-passport]: https://www.passportjs.org/
[node-redux]: https://redux.js.org/
[node-redux-saga]: https://redux-saga.js.org/
[node-redux-thunk]: https://www.npmjs.com/package/redux-thunk
[node-tsoa]: https://tsoa-community.github.io/docs/
[node-winston]: https://github.com/winstonjs

<!-- Python -->

[beautiful-soup]: https://www.crummy.com/software/BeautifulSoup/bs4/doc/
[django]: https://www.djangoproject.com/
[fast-api]: https://fastapi.tiangolo.com/
[flask]: https://flask.palletsprojects.com/en/3.0.x/
[pipenv]: https://pipenv.pypa.io/en/latest/
[scikit-learn]: https://scikit-learn.org/stable/
[virtualenv]: https://virtualenv.pypa.io/en/latest/

<!-- Tools -->

[sequence-diagram]: https://sequencediagram.org/
[sonarlint]: https://www.sonarsource.com/products/sonarlint/
[spotbugs]: https://spotbugs.github.io/

<!-- Version Control -->

[git]: https://git-scm.com/

<!-- Adobe -->

[adobe]: https://www.adobe.com
[illustrator]: https://www.adobe.com/products/illustrator.html
[photoshop]: https://www.adobe.com/products/photoshop.html

<!-- Resources -->

[mobbin]: https://mobbin.com
[monumentvalleygame]: https://www.monumentvalleygame.com
