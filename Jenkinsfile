pipeline {
    agent any

    environment {
        IMAGE_NAME = 'vansh967/react-app:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Vansh-13/Portfolieo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t vansh967/react-app:latest .'
            }
        }

    }

    post {
        always {
            cleanWs()
        }
    }
}
