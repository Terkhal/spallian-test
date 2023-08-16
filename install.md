# Fork the project

You must fork the project and create a public project in your gitlab/github account.

## Clone the project:

```js
//With a SSH Key
git clone git@github.com:devSpallian/spallian-test.git
```
OR
```
git clone https://github.com/devSpallian/spallian-test.git
```

## Link the project to your gitlab/github account:
Create a new public repository in your Gitlab/GitHub account, link the project

```
git remote set-url origin [url to your gitlab/github project]
```

# Docker Installation

## Introduction

Docker is not necessary but recommended
https://docs.docker.com/

## You can install docker desktop that come with docker compose (v2)  
- Linux : https://docs.docker.com/desktop/install/linux-install/
- Mac : https://docs.docker.com/desktop/install/mac-install/
- Window : https://docs.docker.com/desktop/install/windows-install/

## **Or** install docker engine manually, then install docker-compose (v1) (Linux/Mac)

### Install docker engine :

- Linux/Mac : https://docs.docker.com/engine/install/ubuntu/

### Install docker-compose :
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```
sudo chmod +x /usr/local/bin/docker-compose
```

```
docker-compose --version
```

If done correctly, you will see output similar to this:
```js
//Output
docker-compose version 1.29.2, build 5becea4c
```

# Run the project

**Do not forget to navigate to the root folder of the project to use these commands.**


**Depending of your docker installation you must choose between compose v1 or v2** 

## Build the container

Type the following command in a terminal:

```js
// compose v1:
docker-compose build
// OR compose v2:
docker compose build
```


## <a name="title_run_container"></a>Run the container (in the background)

Type the following command in a terminal:


```js
//compose v1:
docker-compose up -d
//OR compose v2:  
docker compose up -d
```
If everything is working you should see the container running using this command:

```js
//compose v1:
docker-compose ps
//OR compose v2:  
docker compose ps
```

## Shutdown the container

Type the following command in a terminal:

```js
//compose v1:
docker-compose down
// OR compose v2:  
docker compose down
```


## Install dependencies

Type the following command in a terminal ([the container must be running](#title_run_container)):

```js
//compose v1:
docker-compose exec app npm install [dependency-name]
// OR compose v2:
docker compose exec app npm install [dependency-name]
```
## Get inside the container

```js
//compose v1:
docker-compose exec app sh
// OR compose v2:
docker compose exec app sh
```

# Run the project without Docker

**if for some reason you can't make docker to work, follow these instructions**

**However, it might not work unless you have the right version of Node**

* Install NodeJs
* Install npm

Then use the following command inside the project folder to install necessary dependencies:

```js
npm install
```
Then run the project:

```js
npm run start
```

