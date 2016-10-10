  $(document).on 'change', '.new-notification', ->
    $selected_options = $('option:selected', this)

    if $selected_options.length > 0
      $selected_option       = $selected_options.first()
      sub_service_request_id = $selected_option.data('sub-service-request-id')
      identity_id            = $selected_option.data('identity-id')
      is_service_provider    = $selected_option.data('is-service-provider')
      current_user_id        = $selected_option.data('current-user-id')
      $this                  = $(this)
      reset_select_picker    = ->
        $this.selectpicker('deselectAll')
        $this.selectpicker('render')

      if current_user_id == identity_id
        alert("You can not send a message to yourself.")
        reset_select_picker()
      else
        $.ajax
          type: 'GET'
          url:  '/dashboard/notifications/new.js'
          data:
            sub_service_request_id: sub_service_request_id
            identity_id:            identity_id
            is_service_provider:    is_service_provider
          success: ->
            reset_select_picker()
