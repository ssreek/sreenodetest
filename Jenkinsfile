pipeline {
  agent any
  stages {
    stage('mybuild') {
      steps {
        sh 'echo "Sree test"'
      }
    }
    stage('againbuild') {
      steps {
        bat 'echo "test"'
      }
    }
  }
}