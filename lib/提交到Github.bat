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
set /p branchnum=ѡ��Ҫ�ύ�ķ�֧������=
echo.
if defined branch[%branchnum%] (
	echo ��ѡ����!branch[%branchnum%]!��֧..
	if exist !branch[%branchnum%]! (
		echo ��ʼ�ύ...
		cd !branch[%branchnum%]!
		git add .
		echo.
		set /p str=���뱸ע��Ϣ=
		echo.
		git commit -m "!str!"
		set bran=!branch[%branchnum%]!
		git push origin master:!bran!
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