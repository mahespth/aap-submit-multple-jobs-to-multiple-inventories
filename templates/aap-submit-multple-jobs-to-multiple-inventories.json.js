{
    "name": "Submit multiple jobs for multiple templates",
    "description": "Submit multiple jobs for multiple templates, you really need to know what your doing to run this.",
    "spec": [
        {
            "type": "multiselect",
            "default": "",
            "required": true,
            "variable": "templates",
            "choices": {{ templates }},
            "new_question": false,
            "question_name": "Enter the names of the templates",
            "question_description": "Enter the names of the templates, we will submit each template for every inventory supplied."
        },
        {
            "max": 1024,
            "min": 0,
            "type": "multiselect",
            "default": "",
            "required": true,
            "variable": "inventories",
            "new_question": false,
            "choices": {{ inventories }},
            "question_name": "Enter the names of the inventories",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "multiselect",
            "default": "",
            "required": false,
            "variable": "credentials",
            "new_question": false,
            "choices": {{ credentials }},
            "question_name": "Select required credentails",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "organization",
            "new_question": false,
            "question_name": "Enter the organization name if required",
            "question_description": ""
        },
        {
            "max": 5,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "diff_mode",
            "new_question": false,
            "choices": [true,false],
            "question_name": "Diff mode",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "multiselect",
            "default": "",
            "required": false,
            "variable": "execution_environment",
            "new_question": false,
            "choices": {{ execution_environments }},
            "question_name": "Select exection environment",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "extra_vars",
            "new_question": false,
            "question_name": "Enter extra vars",
            "question_description": ""
        },
        {
            "max": 128,
            "min": 0,
            "type": "integer",
            "required": false,
            "variable": "forks",
            "new_question": false,
            "question_name": "Forks",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "instance_groups",
            "new_question": false,
            "question_name": "Instance groups",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "integer",
            "required": false,
            "variable": "interval",
            "new_question": false,
            "question_name": "Update interval",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "integer",
            "required": false,
            "variable": "job_slice_count",
            "new_question": false,
            "question_name": "Job slice count",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "integer",
            "default": "",
            "required": false,
            "variable": "job_timeout",
            "new_question": false,
            "question_name": "Job timeout",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "multiplechoice",
            "required": false,
            "variable": "job_type",
            "new_question": false,
            "choices": ["run", "check"],
            "question_name": "Job Type (run or a check)",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "labels",
            "new_question": false,
            "question_name": "Labels",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "integer",
            "required": false,
            "variable": "request_timeout",
            "new_question": false,
            "question_name": "Request timeout",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "scm_branch",
            "new_question": false,
            "question_name": "SCM branch name",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "skip_tags",
            "new_question": false,
            "question_name": "Skip tags",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "tags",
            "new_question": false,
            "question_name": "Tags",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "integer",
            "required": false,
            "variable": "timeout",
            "new_question": false,
            "question_name": "Timeout",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "multiplechoice",
            "required": false,
            "variable": "verbosity",
            "choices": ["0","1","2","3","4","5"],
            "question_name": "Verbosity",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "multiplechoice",
            "required": false,
            "variable": "wait",
            "new_question": false,
            "choices": [ true, false ],
            "question_name": "Wait for completion of job",
            "question_description": ""
        },
        {
            "max": 1024,
            "min": 0,
            "type": "text",
            "required": false,
            "variable": "limit",
            "new_question": false,
            "question_name": "Limit",
            "question_description": ""
        },
    ]
}
