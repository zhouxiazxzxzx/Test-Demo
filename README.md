#  新视窗SASS物业云管理系统 （ SASS Frontend project)

> Project for SASS management

## Build Setup

``` bash
# install dependencies
npm install

##  open command menu
npm run command
npm run command:mac

```
## Menu action
### In the action menu, you can execute the following commands:

``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目文件结构

build --          ----打包配置文件等
config--
src               ----业务相关文件
 |--- static      -- 存放静态资源
 | |- img         -- png,jpg等
 | |- css         -- 样式文件
 | |- svg         -- 图标文件,字体文件
 |
 |--- config      -- 配置或者获取配置相关文件，比如获取网关地址
 | |- config.js
 |
 |--- components  -- 组件放置文件夹
 | |- ns-basic
 | |- ns-components
 | |  |- tree
 | |  |- grid
 | |  |- alert
 |
 |--- api
 | |- front
 | | |- login.js
 | | |- rigister.js
 | | |- changePwd.js
 | | |- userInfo.js
 | |- system
 | | |- enterpriseList.js -- 企业账号管理
 | | |- formFiledList.js  -- 表单字段
 | | |- dictionaryList.js -- 数据字典
 | | |- menuList.js       -- 菜单与按钮
 | | |- changePwd.js      -- 修改密码
 | | |- employeeList.js   -- 部门与员工
 | | |- roleList.js       -- 角色与权限
 | |- owner
 | | |- houseList.js      -- 房产管理
 | | |- ownerList.js      -- 客户管理
 | | |- salesList.js      -- 售楼登记
 | | |- checkList.js      -- 收房管理
 | | |- fitupList.js      -- 装修管理
 | | |- checkinList.js    -- 入住管理
 | | |- letList.js        -- 出租管理
 | | |- carList.js        -- 车辆管理
 |
 |--- utils       -- 工具类js文件，包括过滤器等，工具类js以【Utils】结尾，如【StringUtils.js】
 |                   filter以【Filters】结尾按功能模块划分，如【OwnerFilters.js】，【SystemFilters.js】,共通部分移入到【CommonFilters.js】
 |
 |--- views       --业务页面放置文件夹
 | |- error
 | | |- 500.vue
 | | |- 404.vue
 | | |- 401.vue
 | | |- unfinshed.vue
 | |- common
 | | |- header.vue
 | | |- sidebar.vue
 | | |- copyright.vue
 | | |- layout.vue
 | |- store
 | |- front
 | | |- login.vue
 | | |- register.vue
 | | |- changePwd.vue
 | | |- userInfo.vue       -- 个人信息页面
 | |- system      -- 系统管理模块
 | | |- enterpriseList.vue -- 企业账号管理
 | | |- formFiledList.vue  -- 表单字段
 | | |- dictionaryList.vue -- 数据字典
 | | |- menuList.vue       -- 菜单与按钮
 | | |- changePwd.vue      -- 修改密码
 | | |- employeeList.vue   -- 部门与员工
 | | |- roleList.vue       -- 角色与权限
 | |- owner       -- 业户模块
 | | |- houseList.vue      -- 房产管理
 | | |- ownerList.vue      -- 客户管理
 | | |- salesList.vue      -- 售楼登记
 | | |- checkList.vue      -- 收房管理
 | | |- fitupList.vue      -- 装修管理
 | | |- checkinList.vue    -- 入住管理
 | | |- letList.vue        -- 出租管理
 | | |- carList.vue        -- 车辆管理
 | |
 | |- router
 |
 |- App.vue
 |- main.js
