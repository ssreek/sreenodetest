pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 6000:6000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
