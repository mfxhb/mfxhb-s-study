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
set /p branchnum=选择要拉取的分支的数字=
echo.
if defined branch[%branchnum%] (
	echo 你选择了!branch[%branchnum%]!分支..
	if exist !branch[%branchnum%]! (
		echo 开始拉取...
		cd !branch[%branchnum%]!
		set bran=!branch[%branchnum%]!
		git init
		git remote add origin git@github.com:mfxhb/mfxhb-s-study.git
		git pull -r origin !bran!:master
	) else (
		cls
	echo 没有此目录,重新选择...
	goto :no1
	)
	
  ) else (
cls
echo 没有此项,重新选择...
goto :no1
)

pause