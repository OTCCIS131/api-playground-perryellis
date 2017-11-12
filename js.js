$(function (){

    const vm = new Vue({
        el: '#api',
        data: {
            loading: false,
            showing: 'teams',
            showingC: 'crimes',
            teams: [],
            team: null,
            crime: null,
            crimes: []
           
        },
         methods: {
            loadTeams() {
                this.loading = true

                this.$http.get('http://nflarrest.com/api/v1/team')
                    .then(resp => {
                        this.teams = resp.body
                        this.loading = false
                    })
            },
             selectTeam(team) {
                this.team = team
                this.showing = 'teams'
                this.loadTeams()
            },
            loadCrimes() {
                this.loading = true

                this.$http.get('http://nflarrest.com/api/v1/crime')
                    .then(resp => {
                        this.crimes = resp.body
                        this.loading = false
                    })
            },
            selectCrime(crime) {
                this.crime = crime
                this.showingCS = 'crimes'
                this.loadCrimes()
            },
          
        }
    })
})