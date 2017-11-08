$(function (){

    const vm = new Vue({
        el: '#api',
        data: {
            loading: false,
            showing: 'teams',
            teams: [],
            team: null,
            crime: []
           
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
          
        }
    })
})