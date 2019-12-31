:kr:**Development-Components-UI**
===================

* B2LINK Service 구현을 위한 Base Framework과 기본 구조가 셋팅되어 있다.
* 개발 환경
	* MongoDB
	* NodeJS
	* HTTPServer_MongoDB_API - not express
	* HTML5, JS, LESS, CSS
-------------
Application's URL
-------------
 - Local
 	- JSON Editor   - <http://localhost:49323/index-Dev-Doc_JSONEditor.html>
 	- Source Editor - <http://localhost:49323/index-Dev-SourceEditor.html>
 	- Semantic UI Template List - <http://localhost:49323/index-smt_template_list.local.html>
 - Release Server
    - JSON Editor   - <http://resource.b2link.co.kr/view/index-Dev-Doc_JSONEditor.html>
 	- Source Editor - <http://resource.b2link.co.kr/view/index-Dev-SourceEditor.html>
 	- Semantic UI Template List - <http://resource.b2link.co.kr/view/index-smt_template_list.html>
 ```
 B2Labs가 아닐시 정상 구동되지 않는 사이트 존재함
 ```
-------------
파일 설명
-------------

#### :file_folder: *.zip
 * 각 폴더에 들어있는 node_modules.zip은 압축을 풀어준다.
 * 압축푼 후 소스 동기화 시 zip에 해당한 파일들은 git의 .gitignore 설정에 의거해서 Commit이 되지 않는다.

> **Note:**
> - <strong>DataBase/B2LINK/0_********.zip</strong>
> - <strong>DataBase_Schema/B2LINK/node_modules.zip</strong>
> - <strong>HTTPServer_MongoDB/APIServer/node_modules.zip</strong>
> - <strong>HTTPServer_WebPage/node_modules.zip</strong>
> - <strong>WebPage/root/node_modules.zip</strong>


#### :file_folder: *.bat
 * 윈도우 탐색기 상에서 Double Click시 구동 됨.
 * MongoDB/****/MongoDB Start***.bat 의 바로가기 생성하고 원하는 위치로 이동 후 실행 가능

#### :file_folder: *.command
 * Finder 상에서 Double Click시 구동 됨.
 * Finder 상에서 Right Click후 가상본 생성 하고 원하는 위치로 이동 후  실행 가능


-------------
폴더 설명
-------------

#### :open_file_folder: _Coding_Convention [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/_Coding_Convention/README.md)
 * 코딩 규칙 문서폴더


#### :open_file_folder: _Description
 * 폴더별 상세 설명 문서가 들어있는 폴더


#### :open_file_folder: _Tool [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/_Tools/README.md)
 * 개발에 사용되는 툴들에 대한 설명이 들어있는 폴더
 * 종류
	* IDE
	* Database
	* Platform


#### :open_file_folder: bin_mac [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/bin_mac/README.md)
 * 필요한 포괄적인 Build Script가 생성될 예정
 * 현재 만들어진 Build Script는 없다.

#### :open_file_folder: bin_win [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/bin_win/README.md)
 * 필요한 포괄적인 Build Script가 생성될 예정
 * 현재 만들어진 Build Script는 없다.


#### :open_file_folder: DataBase [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/DataBase/README.md)
 * MongoDB의 실제 db 파일들이 존재하는 폴더
 * :heavy_exclamation_mark: <strong>DataBase/B2LINK/0_*******.zip을 압축 해제한다.</strong>
	* :heavy_exclamation_mark: <strong>생성된 폴더 이름을 0으로 바꿔 준다.</strong>


#### :open_file_folder: DataBase_Schema [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/DataBase_Schema/README.md)
 * WorkSpace
 * MongoDB의 Schema 및 Procedure를 개발하는 Workspace
 * MongoDB의 Procedure가 주를 이룬다.

> **Note:**
> - DataBase_Schema/******/bin_***에 있는 BatchFile에 특정 개발을 위한 기능들이 존재한다.
> - DataBase_Schema/******/bin_***에 있는 BatchFile 구동을 통해 MongoDB에 추가된다.

 * :heavy_exclamation_mark: <strong>DataBase_Schema/B2LINK/node_modules.zip을 압축 해제 한다.</strong>
	* :heavy_exclamation_mark: <strong>DataBase_Schema/B2LINK/node_modules/exes/형태의 폴더 구조가 맞는 지 확인한다.</strong>


#### :open_file_folder: HTTPServer_MongoDB(NodeJS) [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/HTTPServer_MongoDB/README.md)
 * MongoDB의 데이터 서비스 Server

> **Note:**
> - HTTPServer_MongoDB/******/bin_***에 있는 BatchFile에 특정 개발을 위한 기능들이 존재한다.

 * :open_file_folder: HTTPServer_MongoDB/MemberSession [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/HTTPServer_MongoDB/MemberSession/README.md)

 * :heavy_exclamation_mark: <strong>HTTPServer_MongoDB/MemberSession/node_modules.zip을 압축 해제 한다.</strong>
	* :heavy_exclamation_mark: <strong>HTTPServer_MongoDB/MemberSession/node_modules/exes/형태의 폴더 구조가 맞는 지 확인한다.</strong>


#### :open_file_folder: HTTPServer_WebPage(NodeJS) [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/HTTPServer_WebPage/README.md)
 * WebPage/******/를 서비스 하는 HTTPServer
 * NodeJS - Express 기반이다.

 * :heavy_exclamation_mark: <strong>HTTPServer_WebPage/node_modules.zip을 압축 해제 한다.</strong>
	* :heavy_exclamation_mark: <strong>HTTPServer_WebPage/node_modules/exes/형태의 폴더 구조가 맞는 지 확인한다.</strong>


#### :open_file_folder: MongoDB [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/MongoDB/README.md)
 * MongoDB의 Binary들이 모여있는 폴더

 * 사용 버전

> **Note:**
> - 3.4.5_x64
> - 3.4.5_x64__Mac


#### :open_file_folder: WebPage [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/WebPage/README.md)
 * Client Web Application 다.
 * :open_file_folder: WebPage/root [- README.md](https://github.com/B2Labs/Development-Components-UI/blob/master/WebPage/root/README.md)

 * :heavy_exclamation_mark: <strong>WebPage/root/node_modules.zip을 압축 해제 한다.</strong>
	* :heavy_exclamation_mark: <strong>WebPage/root/node_modules/exes/형태의 폴더 구조가 맞는 지 확인한다.</strong>

> **Note:**
> - WebPage/******/bin_***에 있는 BatchFile에 특정 개발을 위한 기능들이 존재한다.

