pipeline {
    agent any

    environment {
        APP_BRANCH = "${env.BRANCH_NAME}"
    }

    stages {
        stage('checkout') {
            steps {
                checkout scm
            }
        }

        stage('build') {
            steps {
                echo "Building application for branch: ${APP_BRANCH}"
                bat 'docker build -t node-%BRANCH_NAME%:latest .'
            }
        }

        stage('test') {
            steps {
                echo "Running test stage for branch: ${APP_BRANCH}"
                bat 'docker run --rm -e CI=true node-%BRANCH_NAME%:latest npm test -- --watchAll=false'
            }
        }

        stage('build docker image') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'main') {
                        env.IMAGE_NAME = 'nodemain'
                        env.APP_PORT = '3000'
                        env.CONTAINER_NAME = 'nodemain'
                    } else if (env.BRANCH_NAME == 'dev') {
                        env.IMAGE_NAME = 'nodedev'
                        env.APP_PORT = '3001'
                        env.CONTAINER_NAME = 'nodedev'
                    } else {
                        error "Unsupported branch: ${env.BRANCH_NAME}"
                    }
                }

                echo "Creating final Docker image: ${IMAGE_NAME}:latest"
                bat 'docker build -t %IMAGE_NAME%:latest .'
            }
        }

        stage('deploy') {
            steps {
                echo "Deploying container: ${CONTAINER_NAME} on port ${APP_PORT}"

                bat 'docker rm -f %CONTAINER_NAME% || exit 0'
                bat 'docker run -d --name %CONTAINER_NAME% -p %APP_PORT%:3000 %IMAGE_NAME%:latest'
            }
        }
    }

    post {
        always {
            echo "Pipeline finished for branch: ${APP_BRANCH}"
        }
    }
}