import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  // 一、开发工具（通用）
  {
    title: '开发工具',
    items: [
      // 代码编辑工具
      {
        icon: 'https://code.visualstudio.com/favicon.ico',
        title: 'VS Code',
        desc: '微软开发的轻量跨平台代码编辑器，支持丰富插件',
        link: 'https://code.visualstudio.com/docs',
      },
      {
        icon: 'https://www.jetbrains.com/idea/docs/favicon.ico',
        title: 'IntelliJ IDEA',
        desc: 'Java/Python全功能IDE，支持多语言开发',
        link: 'https://www.jetbrains.com/help/idea/',
      },
      {
        icon: 'https://www.sublimetext.com/favicon.ico',
        title: 'Sublime Text',
        desc: '轻量高速的代码编辑器，支持多语言语法高亮',
        link: 'https://www.sublimetext.com/docs/',
      },
      {
        icon: 'https://atom.io/favicon.ico',
        title: 'Atom',
        desc: 'GitHub开发的开源可定制编辑器',
        link: 'https://flight-manual.atom.io/',
      },

      // 在线工具
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端API兼容性查询工具',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具，支持PNG/JPG格式',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具集',
        desc: '包含JSON解析、正则测试、编码转换等开发工具',
        link: 'https://tool.lu',
      },
      {
        icon: 'https://www.json.cn/favicon.ico',
        title: 'JSON中文网',
        desc: 'JSON在线解析、格式化与验证工具',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '包含API测试、加密解密、格式转换等专业工具',
        link: 'https://devtool.tech',
      },

      // 版本控制
      {
        icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        title: 'Git',
        desc: '分布式版本控制系统',
        link: 'https://git-scm.com/book/zh/v2',
      },
      {
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        title: 'GitHub',
        desc: '代码托管平台，支持协作开发与开源项目',
        link: 'https://docs.github.com/zh',
      },
      {
        icon: 'https://about.gitlab.com/images/press/logo/svg/gitlab-icon-500.svg',
        title: 'GitLab',
        desc: '自托管代码仓库与DevOps平台',
        link: 'https://docs.gitlab.com/ee/',
      },
    ],
  },

  // 二、前端技术
  {
    title: '前端框架与库',
    items: [
      // 核心框架
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: 'Facebook开发的声明式UI库，用于构建组件化界面',
        link: 'https://zh-hans.reactjs.org/docs/getting-started.html',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式JavaScript框架，易学易用，灵活高效',
        link: 'https://cn.vuejs.org/guide/introduction.html',
      },
      {
        icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
        title: 'Angular',
        desc: 'Google开发的全功能前端框架，基于TypeScript',
        link: 'https://angular.cn/docs',
      },
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: '编译时框架，无运行时开销，直接生成高效DOM操作代码',
        link: 'https://svelte.dev/docs',
      },
      {
        icon: 'https://solidjs.com/favicon.ico',
        title: 'Solid',
        desc: '类React语法的高性能前端框架，零虚拟DOM',
        link: 'https://www.solidjs.com/docs/latest',
      },

      // 移动端框架
      {
        icon: 'https://reactnative.dev/img/header_logo.svg',
        title: 'React Native',
        desc: '用React开发原生移动应用（iOS/Android）',
        link: 'https://reactnative.cn/docs/getting-started',
      },
      {
        icon: 'https://ionicframework.com/docs/icons/favicon.ico',
        title: 'Ionic',
        desc: '跨平台移动应用开发框架，基于Web技术',
        link: 'https://ionicframework.com/docs',
      },
      {
        icon: 'https://flutter.dev/images/favicon.png',
        title: 'Flutter',
        desc: 'Google的UI工具包，用Dart开发跨平台应用',
        link: 'https://flutter.cn/docs',
      },

      // 小程序开发
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序',
        desc: '微信生态内的轻量级应用，无需安装即可使用',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: '/icons/taro.svg',
        title: 'Taro',
        desc: '多端统一开发框架，一套代码运行于小程序、H5、App',
        link: 'https://taro.jd.com/docs',
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '基于Vue的跨端框架，支持全平台发行',
        link: 'https://uniapp.dcloud.net.cn/',
      },
    ],
  },

  {
    title: '前端生态工具',
    items: [
      // UI组件库
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: 'React企业级UI组件库，设计规范完善',
        link: 'https://ant.design/docs/react/introduce',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: 'Vue 3的企业级UI组件库',
        link: 'https://element-plus.org/zh-CN/',
      },
      {
        icon: 'https://mui.com/static/logo.png',
        title: 'Material UI',
        desc: '基于Material Design的React组件库',
        link: 'https://mui.com/material-ui/getting-started/',
      },
      {
        icon: 'https://vant-ui.github.io/vant/favicon.ico',
        title: 'Vant',
        desc: '轻量移动端Vue组件库，适配多端',
        link: 'https://vant-ui.github.io/vant/#/zh-CN',
      },
      {
        icon: 'https://arco.design/favicon.ico',
        title: 'Arco Design',
        desc: '字节跳动开源的企业级UI组件库',
        link: 'https://arco.design/docs/intro',
      },

      // 状态管理
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'React状态管理库，基于单向数据流',
        link: 'https://cn.redux.js.org/introduction/getting-started',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: 'Vue官方推荐的状态管理库，替代Vuex',
        link: 'https://pinia.vuejs.org/zh/',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '轻量React状态管理库，API简洁',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: '原子化状态管理库，适合React应用',
        link: 'https://jotai.org/docs/introduction',
      },

      // 路由工具
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React官方路由库，处理页面导航',
        link: 'https://reactrouter.com/docs/en/v6',
      },
      {
        icon: 'https://router.vuejs.org/favicon.ico',
        title: 'Vue Router',
        desc: 'Vue官方路由工具，管理SPA路由',
        link: 'https://router.vuejs.org/zh/',
      },
      {
        icon: 'https://angular.io/assets/images/logos/angular/router-icon-192x192.png',
        title: 'Angular Router',
        desc: 'Angular框架的路由模块',
        link: 'https://angular.cn/guide/router',
      },

      // 工程化工具
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack',
        desc: '前端模块打包工具，处理资源依赖',
        link: 'https://www.webpackjs.com/concepts/',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite',
        desc: '下一代前端构建工具，基于ES模块，极速开发体验',
        link: 'https://cn.vitejs.dev/guide/',
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'JavaScript模块打包器，适合库开发',
        link: 'https://www.rollupjs.com/guide/introduction',
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'JavaScript编译器，将ES6+转译为兼容代码',
        link: 'https://www.babeljs.cn/docs/',
      },
      {
        icon: 'https://eslint.org/favicon.ico',
        title: 'ESLint',
        desc: 'JavaScript代码检查工具，保证代码质量',
        link: 'https://eslint.org/docs/latest/user-guide/getting-started',
      },
    ],
  },

  {
    title: '前端技术栈扩展',
    items: [
      // CSS解决方案
      {
        icon: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
        title: 'Sass',
        desc: 'CSS预处理器，支持变量、嵌套、混入等特性',
        link: 'https://sass-lang.com/guide',
      },
      {
        icon: 'https://lesscss.org/public/img/less_logo.png',
        title: 'Less',
        desc: '动态样式语言，扩展CSS功能',
        link: 'https://less.bootcss.com/',
      },
      {
        icon: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        title: 'Tailwind CSS',
        desc: '功能类优先的CSS框架，快速构建UI',
        link: 'https://www.tailwindcss.cn/docs',
      },
      {
        icon: 'https://postcss.org/assets/logo-3e39b0aa.svg',
        title: 'PostCSS',
        desc: '用JavaScript转换CSS的工具，支持插件扩展',
        link: 'https://postcss.org/',
      },
      {
        icon: 'https://styled-components.com/favicon.ico',
        title: 'styled-components',
        desc: 'React的CSS-in-JS库，组件级样式封装',
        link: 'https://styled-components.com/docs',
      },

      // 数据请求
      {
        icon: 'https://axios-http.com/assets/favicon.ico',
        title: 'Axios',
        desc: '基于Promise的HTTP客户端，支持浏览器和Node.js',
        link: 'https://axios-http.com/docs/intro',
      },
      {
        icon: 'https://react-query.tanstack.com/favicon.ico',
        title: 'React Query',
        desc: 'React数据请求与缓存库',
        link: 'https://react-query.tanstack.com/overview',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API工具集，含请求、存储等功能',
        link: 'https://vueuse.org/',
      },

      // 可视化
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '百度开源的可视化图表库，支持多种图表类型',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: 'https://antv.vision/icons/icon-72x72.png',
        title: 'AntV',
        desc: '蚂蚁集团数据可视化解决方案，含G2、F2等',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        title: 'Three.js',
        desc: 'JavaScript 3D库，用于创建WebGL场景',
        link: 'https://threejs.org/docs/',
      },
      {
        icon: 'https://d3js.org/favicon.png',
        title: 'D3.js',
        desc: '数据驱动的DOM操作库，用于复杂可视化',
        link: 'https://d3js.org/',
      },

      // 前端测试
      {
        icon: 'https://jestjs.io/img/favicon/favicon.ico',
        title: 'Jest',
        desc: 'JavaScript测试框架，支持单元测试、快照测试',
        link: 'https://jestjs.io/docs/getting-started',
      },
      {
        icon: 'https://cypress.io/favicon.ico',
        title: 'Cypress',
        desc: '前端端到端测试工具，模拟用户操作',
        link: 'https://docs.cypress.io/guides/getting-started/opening-the-app',
      },
      {
        icon: 'https://testing-library.com/img/favicon.ico',
        title: 'React Testing Library',
        desc: 'React组件测试库，关注用户行为',
        link: 'https://testing-library.com/docs/react-testing-library/intro/',
      },
    ],
  },

  // 三、后端技术 - Java
  {
    title: 'Java技术栈',
    items: [
      // 基础
      {
        icon: '/icons/java.svg',
        title: 'Java官方文档',
        desc: 'Java语言及JDK官方文档',
        link: 'https://docs.oracle.com/javase/8/docs/zh/api/',
      },
      {
        icon: 'https://docs.oracle.com/javase/tutorial/figures/javase/tutorial.ico',
        title: 'Java教程 - 菜鸟教程',
        desc: 'Java基础语法、面向对象等入门教程',
        link: 'https://www.runoob.com/java/java-tutorial.html',
      },
      {
        icon: 'https://maven.apache.org/images/maven-logo-black-on-white.png',
        title: 'Maven',
        desc: 'Java项目构建与依赖管理工具',
        link: 'https://maven.apache.org/guides/index.zh-CN.html',
      },
      {
        icon: 'https://gradle.org/images/gradle-logo-256x256.png',
        title: 'Gradle',
        desc: '新一代构建工具，支持多语言，更灵活',
        link: 'https://docs.gradle.org/current/userguide/userguide.html',
      },
      {
        icon: 'https://www.jetbrains.com/idea/docs/favicon.ico',
        title: 'IntelliJ IDEA',
        desc: 'Java开发IDE，功能强大，智能提示',
        link: 'https://www.jetbrains.com/help/idea/getting-started.html',
      },

      // Spring生态
      {
        icon: 'https://spring.io/img/spring.svg',
        title: 'Spring Framework',
        desc: 'Java企业级应用核心框架，依赖注入容器',
        link: 'https://docs.spring.io/spring-framework/docs/current/reference/html/',
      },
      {
        icon: 'https://spring.io/img/projects/spring-boot.svg',
        title: 'Spring Boot',
        desc: '简化Spring应用开发，自动配置，内嵌服务器',
        link: 'https://springdoc.cn/spring-boot/',
      },
      {
        icon: 'https://spring.io/img/projects/spring-cloud.svg',
        title: 'Spring Cloud',
        desc: '分布式系统开发工具集，微服务架构解决方案',
        link: 'https://www.springcloud.cc/',
      },
      {
        icon: 'https://spring.io/img/projects/spring-security.svg',
        title: 'Spring Security',
        desc: '认证与授权框架，保护应用安全',
        link: 'https://www.springcloud.cc/spring-security-zhcn.html',
      },
      {
        icon: 'https://spring.io/img/projects/spring-data.svg',
        title: 'Spring Data',
        desc: '数据访问层统一接口，简化数据库操作',
        link: 'https://www.springcloud.cc/spring-data-zhcn.html',
      },

      // Web框架
      {
        icon: 'https://spring.io/img/projects/spring-mvc.svg',
        title: 'Spring MVC',
        desc: '基于MVC模式的Web应用开发框架',
        link: 'https://www.runoob.com/spring/spring-mvc-intro.html',
      },
      {
        icon: 'https://struts.apache.org/images/struts-logo.svg',
        title: 'Struts2',
        desc: 'MVC框架，用于开发Java Web应用',
        link: 'https://struts.apache.org/docs/home.html',
      },
      {
        icon: 'https://jakarta.ee/images/jakartaee_logo.svg',
        title: 'Jakarta EE',
        desc: '企业级Java平台，前身为Java EE',
        link: 'https://jakarta.ee/documentation/',
      },

      // ORM框架
      {
        icon: 'https://mybatis.org/images/mybatis-logo.png',
        title: 'MyBatis',
        desc: 'Java持久层框架，SQL映射工具',
        link: 'https://mybatis.org/mybatis-3/zh/index.html',
      },
      {
        icon: 'https://mybatis.org/spring-boot-starter/mybatis-logo.png',
        title: 'MyBatis-Plus',
        desc: 'MyBatis增强工具，简化CRUD操作',
        link: 'https://baomidou.com/pages/24112f2/',
      },
      {
        icon: 'https://hibernate.org/images/hibernate-logo.svg',
        title: 'Hibernate',
        desc: 'ORM框架，自动映射Java对象与数据库表',
        link: 'https://docs.jboss.org/hibernate/orm/current/reference/html/',
      },
    ],
  },

  // 三、后端技术 - Python
  {
    title: 'Python技术栈',
    items: [
      // 基础
      {
        icon: 'https://www.python.org/static/favicon.ico',
        title: 'Python官方文档',
        desc: 'Python语言官方教程与标准库文档',
        link: 'https://docs.python.org/zh-cn/3/',
      },
      {
        icon: 'https://www.runoob.com/images/favicon.ico',
        title: 'Python教程 - 菜鸟教程',
        desc: 'Python语法、数据类型、函数等入门教程',
        link: 'https://www.runoob.com/python/python-tutorial.html',
      },
      {
        icon: 'https://www.jetbrains.com/pycharm/docs/favicon.ico',
        title: 'PyCharm',
        desc: 'Python开发IDE，支持代码分析、调试等',
        link: 'https://www.jetbrains.com/help/pycharm/getting-started.html',
      },
      {
        icon: 'https://jupyter.org/assets/favicon.ico',
        title: 'Jupyter Notebook',
        desc: '交互式计算环境，支持代码、文本、可视化',
        link: 'https://jupyter-notebook.readthedocs.io/en/stable/',
      },

      // Web框架
      {
        icon: 'https://www.djangoproject.com/favicon.ico',
        title: 'Django',
        desc: '全功能Python Web框架，内置ORM、Admin等',
        link: 'https://docs.djangoproject.com/zh-hans/4.2/',
      },
      {
        icon: 'https://flask.palletsprojects.com/en/2.0.x/_static/flask-icon.png',
        title: 'Flask',
        desc: '轻量级Web框架，灵活可扩展',
        link: 'https://dormousehole.readthedocs.io/en/latest/',
      },
      {
        icon: 'https://fastapi.tiangolo.com/img/favicon.png',
        title: 'FastAPI',
        desc: '高性能异步Web框架，自动生成API文档',
        link: 'https://fastapi.tiangolo.com/zh/',
      },
      {
        icon: 'https://tornado.readthedocs.io/en/stable/_static/tornado.png',
        title: 'Tornado',
        desc: '异步非阻塞Web框架，适合高并发场景',
        link: 'https://tornado.readthedocs.io/en/stable/',
      },

      // 数据处理
      {
        icon: 'https://pandas.pydata.org/static/img/pandas.svg',
        title: 'Pandas',
        desc: 'Python数据分析库，处理结构化数据',
        link: 'https://pandas.pydata.org/docs/',
      },
      {
        icon: 'https://numpy.org/images/favicon.ico',
        title: 'NumPy',
        desc: '科学计算基础库，支持多维数组与数学运算',
        link: 'https://numpy.org/doc/',
      },
      {
        icon: 'https://matplotlib.org/_static/favicon.ico',
        title: 'Matplotlib',
        desc: 'Python绘图库，生成各类可视化图表',
        link: 'https://matplotlib.org/stable/contents.html',
      },
      {
        icon: 'https://scikit-learn.org/stable/_static/favicon.ico',
        title: 'Scikit-learn',
        desc: '机器学习库，包含分类、回归、聚类等算法',
        link: 'https://scikit-learn.org/stable/user_guide.html',
      },

      // 其他工具
      {
        icon: 'https://www.sqlalchemy.org/img/sqla_logo.png',
        title: 'SQLAlchemy',
        desc: 'Python ORM框架，支持多种数据库',
        link: 'https://docs.sqlalchemy.org/en/20/',
      },
      {
        icon: 'https://scrapy.org/img/scrapy-logo.png',
        title: 'Scrapy',
        desc: 'Python爬虫框架，用于数据抓取',
        link: 'https://scrapy-chs.readthedocs.io/zh_CN/latest/',
      },
      {
        icon: 'https://www.selenium.dev/images/favicon.ico',
        title: 'Selenium',
        desc: 'Web自动化测试工具，支持浏览器控制',
        link: 'https://www.selenium.dev/documentation/',
      },
    ],
  },

  // 三、后端技术 - 其他语言
  {
    title: '其他后端技术',
    items: [
      // Node.js
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: '基于Chrome V8引擎的JavaScript运行时',
        link: 'https://nodejs.org/zh-cn/docs/',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: 'Node.js Web框架，简洁灵活',
        link: 'https://expressjs.com/zh-cn/',
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: 'Node.js Web框架，基于中间件，更优雅',
        link: 'https://koajs.com/',
      },
      {
        icon: 'https://nestjs.com/img/logo-small.svg',
        title: 'NestJS',
        desc: 'Node.js后端框架，支持TypeScript，模块化',
        link: 'https://docs.nestjs.cn/',
      },

      // Go
      {
        icon: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
        title: 'Go语言',
        desc: 'Google开发的静态强类型语言，高效简洁',
        link: 'https://go.dev/doc/',
      },
      {
        icon: 'https://gin-gonic.com/favicon.ico',
        title: 'Gin',
        desc: 'Go语言Web框架，高性能',
        link: 'https://gin-gonic.com/docs/',
      },
      {
        icon: 'https://grpc.io/img/favicon.ico',
        title: 'gRPC',
        desc: '高性能RPC框架，基于HTTP/2',
        link: 'https://grpc.io/docs/',
      },

      // PHP
      {
        icon: 'https://www.php.net/images/favicon.ico',
        title: 'PHP',
        desc: '服务器端脚本语言，适合Web开发',
        link: 'https://www.php.net/manual/zh/',
      },
      {
        icon: 'https://laravel.com/favicon.ico',
        title: 'Laravel',
        desc: 'PHP Web框架，优雅高效',
        link: 'https://learnku.com/docs/laravel/10.x',
      },
      {
        icon: 'https://www.symfony.com/favicon.ico',
        title: 'Symfony',
        desc: 'PHP框架，组件化设计',
        link: 'https://symfony.com/doc/current/index.html',
      },

      // Ruby
      {
        icon: 'https://www.ruby-lang.org/zh_CN/images/favicon.ico',
        title: 'Ruby',
        desc: '简洁优雅的动态编程语言',
        link: 'https://www.ruby-lang.org/zh_CN/documentation/',
      },
      {
        icon: 'https://rubyonrails.org/favicon.ico',
        title: 'Ruby on Rails',
        desc: 'Ruby Web框架，遵循 convention over configuration',
        link: 'https://rubyonrails.org/guides',
      },
    ],
  },

  // 四、数据库
  {
    title: '数据库技术',
    items: [
      // 关系型数据库
      {
        icon: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
        title: 'MySQL',
        desc: '开源关系型数据库，广泛用于Web应用',
        link: 'https://dev.mysql.com/doc/',
      },
      {
        icon: 'https://www.postgresql.org/media/img/about/press/elephant.png',
        title: 'PostgreSQL',
        desc: '高级开源关系型数据库，支持复杂查询',
        link: 'https://www.postgresql.org/docs/',
      },
      {
        icon: 'https://www.oracle.com/a/ocom/img/oracle-favicon.ico',
        title: 'Oracle',
        desc: '企业级关系型数据库，功能强大',
        link: 'https://docs.oracle.com/en/database/',
      },
      {
        icon: 'https://docs.microsoft.com/en-us/sql/sql-server/media/sql-server-logo.png?view=sql-server-ver16',
        title: 'SQL Server',
        desc: '微软的关系型数据库管理系统',
        link: 'https://learn.microsoft.com/zh-cn/sql/',
      },

      // NoSQL数据库
      {
        icon: 'https://redis.io/images/favicon.png',
        title: 'Redis',
        desc: '高性能键值对数据库，支持多种数据结构',
        link: 'https://www.redis.net.cn/',
      },
      {
        icon: 'https://www.mongodb.com/assets/images/global/favicon.ico',
        title: 'MongoDB',
        desc: '文档型数据库，存储JSON-like文档',
        link: 'https://docs.mongodb.com/manual/',
      },
      {
        icon: 'https://cassandra.apache.org/images/cassandra_logo.svg',
        title: 'Apache Cassandra',
        desc: '分布式NoSQL数据库，高可用高扩展',
        link: 'https://cassandra.apache.org/doc/latest/',
      },
      {
        icon: 'https://www.neo4j.com/favicon.ico',
        title: 'Neo4j',
        desc: '图数据库，适合存储关系密集型数据',
        link: 'https://neo4j.com/docs/',
      },

      // 搜索引擎与数据仓库
      {
        icon: 'https://elasticsearch.apache.org/favicon.ico',
        title: 'Elasticsearch',
        desc: '分布式全文搜索引擎',
        link: 'https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html',
      },
      {
        icon: 'https://hive.apache.org/images/hive_logo.png',
        title: 'Apache Hive',
        desc: '基于Hadoop的数据仓库工具',
        link: 'https://cwiki.apache.org/confluence/display/Hive/Home',
      },
      {
        icon: 'https://clickhouse.com/favicon.ico',
        title: 'ClickHouse',
        desc: '列式存储数据库，适合分析查询',
        link: 'https://clickhouse.com/docs/zh/',
      },

      // 数据库工具
      {
        icon: 'https://navicat.com/favicon.ico',
        title: 'Navicat',
        desc: '数据库管理工具，支持多数据库类型',
        link: 'https://www.navicat.com.cn/products',
      },
      {
        icon: 'https://dbeaver.io/favicon.ico',
        title: 'DBeaver',
        desc: '开源数据库工具，支持多种数据库',
        link: 'https://dbeaver.com/docs/dbeaver/',
      },
      {
        icon: 'https://flywaydb.org/favicon.ico',
        title: 'Flyway',
        desc: '数据库版本控制工具',
        link: 'https://flywaydb.org/documentation/',
      },
    ],
  },

  // 五、运维技术
  {
    title: '运维技术',
    items: [
      // 服务器管理
      {
        icon: 'https://www.linux.org/favicon.ico',
        title: 'Linux',
        desc: '开源操作系统，广泛用于服务器',
        link: 'https://linux.die.net/man/',
      },
      {
        icon: 'https://www.centos.org/favicon.ico',
        title: 'CentOS',
        desc: '基于Red Hat的Linux发行版',
        link: 'https://www.centos.org/docs/',
      },
      {
        icon: 'https://ubuntu.com/favicon.ico',
        title: 'Ubuntu',
        desc: '基于Debian的Linux发行版',
        link: 'https://help.ubuntu.com/',
      },
      {
        icon: 'https://www.shellscript.sh/favicon.ico',
        title: 'Shell脚本',
        desc: 'Linux命令行脚本，用于自动化任务',
        link: 'https://www.shellscript.sh/',
      },

      // 容器与虚拟化
      {
        icon: 'https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png',
        title: 'Docker',
        desc: '容器化平台，简化应用部署',
        link: 'https://docs.docker.com/get-started/',
      },
      {
        icon: 'https://kubernetes.io/images/favicon.png',
        title: 'Kubernetes',
        desc: '容器编排平台，管理容器集群',
        link: 'https://kubernetes.io/zh/docs/home/',
      },
      {
        icon: 'https://rancher.com/favicon.ico',
        title: 'Rancher',
        desc: 'Kubernetes管理平台',
        link: 'https://ranchermanager.docs.rancher.com/',
      },
      {
        icon: 'https://www.virtualbox.org/favicon.ico',
        title: 'VirtualBox',
        desc: '开源虚拟化软件',
        link: 'https://www.virtualbox.org/manual/',
      },

      // 监控与日志
      {
        icon: 'https://prometheus.io/favicon.ico',
        title: 'Prometheus',
        desc: '开源监控系统，时序数据收集',
        link: 'https://prometheus.io/docs/',
      },
      {
        icon: 'https://grafana.com/favicon.ico',
        title: 'Grafana',
        desc: '数据可视化与监控平台',
        link: 'https://grafana.com/docs/',
      },
      {
        icon: 'https://www.elastic.co/favicon.ico',
        title: 'ELK Stack',
        desc: 'Elasticsearch+Logstash+Kibana，日志管理方案',
        link: 'https://www.elastic.co/what-is/elk-stack',
      },
      {
        icon: 'https://www.zabbix.com/favicon.ico',
        title: 'Zabbix',
        desc: '企业级监控解决方案',
        link: 'https://www.zabbix.com/documentation',
      },

      // 网络与安全
      {
        icon: 'https://nginx.org/favicon.ico',
        title: 'Nginx',
        desc: '高性能HTTP服务器与反向代理',
        link: 'https://nginx.org/en/docs/',
      },
      {
        icon: 'https://www.haproxy.org/favicon.ico',
        title: 'HAProxy',
        desc: '负载均衡器与代理服务器',
        link: 'https://www.haproxy.org/#docs',
      },
      {
        icon: 'https://www.openssl.org/images/openssl-logo.png',
        title: 'OpenSSL',
        desc: '加密工具库，用于SSL/TLS协议',
        link: 'https://www.openssl.org/docs/',
      },
      {
        icon: 'https://www.ssh.com/favicon.ico',
        title: 'SSH',
        desc: '远程登录与安全传输协议',
        link: 'https://www.ssh.com/academy/ssh',
      },
    ],
  },

  // 六、DevOps与云服务
  {
    title: 'DevOps与云服务',
    items: [
      // CI/CD工具
      {
        icon: 'https://jenkins.io/images/favicon.ico',
        title: 'Jenkins',
        desc: '自动化构建、测试、部署工具',
        link: 'https://www.jenkins.io/zh/doc/',
      },
      {
        icon: 'https://about.gitlab.com/images/press/logo/svg/gitlab-icon-500.svg',
        title: 'GitLab CI/CD',
        desc: '与GitLab集成的持续集成/部署工具',
        link: 'https://docs.gitlab.com/ee/ci/',
      },
      {
        icon: 'https://circleci.com/favicon.ico',
        title: 'CircleCI',
        desc: '云端CI/CD平台',
        link: 'https://circleci.com/docs/',
      },
      {
        icon: 'https://argo-cd.readthedocs.io/en/stable/assets/favicon.png',
        title: 'Argo CD',
        desc: '基于Kubernetes的GitOps工具',
        link: 'https://argo-cd.readthedocs.io/en/stable/',
      },

      // 配置管理
      {
        icon: 'https://www.ansible.com/favicon.ico',
        title: 'Ansible',
        desc: '自动化配置管理与部署工具',
        link: 'https://docs.ansible.com/ansible/latest/',
      },
      {
        icon: 'https://saltproject.io/images/favicon.ico',
        title: 'SaltStack',
        desc: '远程执行与配置管理工具',
        link: 'https://docs.saltproject.io/',
      },
      {
        icon: 'https://chef.io/favicon.ico',
        title: 'Chef',
        desc: '基础设施即代码工具',
        link: 'https://docs.chef.io/',
      },

      // 云平台
      {
        icon: 'https://www.aliyun.com/favicon.ico',
        title: '阿里云',
        desc: '国内领先的云服务平台',
        link: 'https://help.aliyun.com/',
      },
      {
        icon: 'https://cloud.tencent.com/favicon.ico',
        title: '腾讯云',
        desc: '腾讯旗下云服务平台',
        link: 'https://cloud.tencent.com/document/product',
      },
      {
        icon: 'https://aws.amazon.com/favicon.ico',
        title: 'AWS',
        desc: '亚马逊云服务，全球领先的云平台',
        link: 'https://aws.amazon.com/cn/documentation/',
      },
      {
        icon: 'https://azure.microsoft.com/favicon.ico',
        title: 'Microsoft Azure',
        desc: '微软云服务平台',
        link: 'https://learn.microsoft.com/zh-cn/azure/',
      },

      // 服务网格与微服务
      {
        icon: 'https://istio.io/favicon.ico',
        title: 'Istio',
        desc: '服务网格平台，管理服务通信',
        link: 'https://istio.io/latest/docs/',
      },
      {
        icon: 'https://linkerd.io/images/favicon.png',
        title: 'Linkerd',
        desc: '轻量级服务网格',
        link: 'https://linkerd.io/2.14/overview/',
      },
      {
        icon: 'https://dubbo.apache.org/imgs/dubbo-logo.svg',
        title: 'Apache Dubbo',
        desc: '高性能Java RPC框架，微服务架构',
        link: 'https://dubbo.apache.org/zh/docs/',
      },
    ],
  },

  // 七、测试工具
  {
    title: '测试工具',
    items: [
      // 单元测试
      {
        icon: 'https://junit.org/junit5/assets/img/junit5-logo.png',
        title: 'JUnit 5',
        desc: 'Java单元测试框架',
        link: 'https://junit.org/junit5/docs/current/user-guide/',
      },
      {
        icon: 'https://pytest.org/favicon.ico',
        title: 'PyTest',
        desc: 'Python单元测试框架',
        link: 'https://docs.pytest.org/en/stable/',
      },
      {
        icon: 'https://jestjs.io/img/favicon/favicon.ico',
        title: 'Jest',
        desc: 'JavaScript单元测试框架',
        link: 'https://jestjs.io/docs/getting-started',
      },
      {
        icon: 'https://docs.rs/crate/cargo-test/latest/favicon.ico',
        title: 'Cargo Test',
        desc: 'Rust语言测试工具',
        link: 'https://doc.rust-lang.org/cargo/commands/cargo-test.html',
      },

      // 接口测试
      {
        icon: 'https://www.postman.com/favicon.ico',
        title: 'Postman',
        desc: 'API测试工具，支持请求发送与管理',
        link: 'https://learning.postman.com/docs/getting-started/introduction/',
      },
      {
        icon: 'https://swagger.io/favicon.ico',
        title: 'Swagger',
        desc: 'API文档生成与测试工具',
        link: 'https://swagger.io/docs/',
      },
      {
        icon: 'https://insomnia.rest/favicon.ico',
        title: 'Insomnia',
        desc: 'REST API测试工具',
        link: 'https://docs.insomnia.rest/',
      },

      // 性能测试
      {
        icon: 'https://jmeter.apache.org/images/logo.svg',
        title: 'Apache JMeter',
        desc: '负载测试与性能测量工具',
        link: 'https://jmeter.apache.org/',
      },
      {
        icon: 'https://k6.io/favicon.ico',
        title: 'k6',
        desc: '现代负载测试工具，基于JavaScript',
        link: 'https://k6.io/docs/',
      },
      {
        icon: 'https://www.loadrunner.com/sites/all/themes/loadrunner/favicon.ico',
        title: 'LoadRunner',
        desc: '企业级性能测试工具',
        link: 'https://admhelp.microfocus.com/loadrunner/',
      },

      // 安全测试
      {
        icon: 'https://www.zaproxy.org/favicon.ico',
        title: 'OWASP ZAP',
        desc: '开源Web应用安全扫描工具',
        link: 'https://www.zaproxy.org/docs/',
      },
      {
        icon: 'https://nmap.org/images/favicon.ico',
        title: 'Nmap',
        desc: '网络扫描与安全审计工具',
        link: 'https://nmap.org/docs.html',
      },
    ],
  },

  // 八、学习资源与社区
  {
    title: '学习资源',
    items: [
      // 文档与教程
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN Web文档',
        desc: 'Web开发权威文档，涵盖HTML、CSS、JS等',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.runoob.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '多语言编程入门教程',
        link: 'https://www.runoob.com',
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6入门教程',
        desc: '阮一峰的ES6语法教程',
        link: 'http://es6.ruanyifeng.com',
      },
      {
        icon: 'https://www.w3school.com.cn/favicon.ico',
        title: 'W3School',
        desc: 'Web技术教程，包含实例与在线编辑器',
        link: 'https://www.w3school.com.cn/',
      },
      {
        icon: 'https://time.geekbang.org/favicon.ico',
        title: '极客时间',
        desc: 'IT技术学习平台，优质课程',
        link: 'https://time.geekbang.org/',
      },
      {
        icon: 'https://ke.segmentfault.com/favicon.ico',
        title: '思否学院',
        desc: 'SegmentFault旗下技术课程平台',
        link: 'https://ke.segmentfault.com/',
      },

      // 技术博客与社区
      {
        icon: 'https://juejin.cn/favicon.ico',
        title: '掘金',
        desc: '开发者社区，技术文章与分享',
        link: 'https://juejin.cn',
      },
      {
        icon: 'https://segmentfault.com/favicon.ico',
        title: 'SegmentFault 思否',
        desc: '技术问答与博客社区',
        link: 'https://segmentfault.com',
      },
      {
        icon: 'https://www.cnblogs.com/favicon.ico',
        title: '博客园',
        desc: '开发者博客平台',
        link: 'https://www.cnblogs.com',
      },
      {
        icon: 'https://stackoverflow.com/favicon.ico',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答社区',
        link: 'https://stackoverflow.com',
      },
      {
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        title: 'GitHub',
        desc: '开源项目托管与协作平台',
        link: 'https://github.com',
      },
    ],
  },

  // 九、AI与大数据
  {
    title: 'AI与大数据',
    items: [
      // 机器学习框架
      {
        icon: 'https://www.tensorflow.org/favicon.ico',
        title: 'TensorFlow',
        desc: 'Google开源机器学习框架',
        link: 'https://www.tensorflow.org/guide',
      },
      {
        icon: 'https://pytorch.org/favicon.ico',
        title: 'PyTorch',
        desc: 'Facebook开源深度学习框架',
        link: 'https://pytorch.org/docs/stable/index.html',
      },
      {
        icon: 'https://mxnet.apache.org/favicon.ico',
        title: 'Apache MXNet',
        desc: '灵活高效的深度学习框架',
        link: 'https://mxnet.apache.org/versions/1.9.1/',
      },

      // 大数据工具
      {
        icon: 'https://hadoop.apache.org/images/hadoop-logo.svg',
        title: 'Hadoop',
        desc: '分布式计算与存储框架',
        link: 'https://hadoop.apache.org/docs/',
      },
      {
        icon: 'https://spark.apache.org/images/spark-logo-trademark.png',
        title: 'Apache Spark',
        desc: '快速通用的大数据处理引擎',
        link: 'https://spark.apache.org/docs/latest/',
      },
      {
        icon: 'https://flink.apache.org/favicon.ico',
        title: 'Apache Flink',
        desc: '分布式流处理框架',
        link: 'https://flink.apache.org/docs/stable/',
      },
      {
        icon: 'https://kafka.apache.org/images/logo.png',
        title: 'Apache Kafka',
        desc: '分布式流处理平台',
        link: 'https://kafka.apache.org/documentation/',
      },

      // AI应用工具
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: 'OpenAI的对话式AI模型',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney',
        desc: 'AI绘画工具，生成高质量图像',
        link: 'https://www.midjourney.com',
      },
      {
        icon: 'https://platform.openai.com/favicon.ico',
        title: 'OpenAI API',
        desc: 'OpenAI的AI模型接口',
        link: 'https://platform.openai.com/docs',
      },
    ],
  },
]
