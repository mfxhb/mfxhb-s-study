@echo off
setlocal enabledelayedexpansion
:no1
set branch[0]=nest
set branch[1]=vue-code
set brantotast=1
echo.
for /l %%i in (0 1 %brantotast%) do  (
 call echo %%i-!branch[%%i]!
)
echo.
set /p branchnum=ѡ��Ҫ��ȡ�ķ�֧������=
echo.
if defined branch[%branchnum%] (
	echo ��ѡ����!branch[%branchnum%]!��֧..
	if exist !branch[%branchnum%]! (
		echo ��ʼ��ȡ...
		cd !branch[%branchnum%]!
		set bran=!branch[%branchnum%]!
		git init
		git remote add origin git@github.com:mfxhb/mfxhb-s-study.git
		git pull -r origin !bran!:master
	) else (
		cls
	echo û�д�Ŀ¼,����ѡ��...
	goto :no1
	)
	
  ) else (
cls
echo û�д���,����ѡ��...
goto :no1
)

pause