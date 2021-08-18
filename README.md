# nodejs 프로젝트
* https://nodejs.org 사이트에서 nodejs 다운로드 받아 설치하기
* 특별한 경우가 아니면 버전의 첫번째 숫자가 짝수인 버전을 다운받는다
* nodejs 설치한후 windows cmd 창을 관리자 권한으로 열어서 몇가지 plugin을 설치한다

## NPM (Nodejs Pakage Manager)
* cmd 창에서 실행할수 있는 명령
* npm install 패키지명 형식으로 명령을 입력하여 필요한 dependencym, plugin 등을 설치한다
* 시스템에 공통으로 사용되는 plugin 들은 npm istall -g plugin 형식으로 명령을 입력한다
* npm install -g 명령은 반드시 관리자 권한으로 입력해야 한다.

## 최초에 설치할 Pagkage(pulg in)
* cmd 창에서 관리자권한으로 입력
* nodemon : nodejs 코드를 작성하고 저장을하면 자동으로 재 실행하여 결과를 확인할수있도록 도와주는 plugin (npm install -g nodemon)
* express-generator : nodejs + express 프레임워크 서버 어플리케이션을 작성할때 사용하는 plugin (npm install -g express-generator) 
* create-react-app : React 기반의 프로젝트를 작성할때 사용하는 plugin (npm install -g create-react-app) 
* yarn : react 프로젝트를 만들어서 개발할때 npm을 대신하여 사용하는 pakage 관리자 (npm install -g yarn)

## nodejs 프로젝트 생성하기
1. 고전적인 방법  
>mkdir 프로젝트명
>cd 프로젝트명
>npm init -y 
2. express-generator를 이용하여 백앤드 프로젝트 만드는 방법
>express 프로젝트명
>cd 프로젝트명
>npm install
3. create-react-app 이용한 React 프론트앤드 프로젝트 만드는 방법
>create-react-app 프로젝트명
>cd 프로젝트명
>yarn

